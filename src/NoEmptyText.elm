module NoEmptyText exposing (rule)

{-| This library add a simple [`elm-review`](https://package.elm-lang.org/packages/jfmengels/elm-review/latest/) rule to prevent people from calling `Html.text` with an empty string as a mean to show "nothing". It works best if you are already using [`elm-community/html-extra`](https://package.elm-lang.org/packages/elm-community/html-extra/latest/)

@docs rule

-}

import Elm.Syntax.Exposing as Exposing
import Elm.Syntax.Expression as Expression exposing (Expression)
import Elm.Syntax.Import exposing (Import)
import Elm.Syntax.ModuleName exposing (ModuleName)
import Elm.Syntax.Node as Node exposing (Node)
import Review.Rule as Rule exposing (Error, Rule)


type Context
    = NoImport
    | Import { aliasing : Maybe ModuleName, exposed : Bool }


{-| This is the rule you should add to your elm-review process.

For details on how to add a rule to your setup, check [here](https://package.elm-lang.org/packages/jfmengels/elm-review/latest/#configuration) it's quite simple!

-}
rule : Rule
rule =
    Rule.newModuleRuleSchema "NoEmptyText" NoImport
        |> Rule.withImportVisitor importVisitor
        |> Rule.withExpressionVisitor expressionVisitor
        |> Rule.fromModuleRuleSchema


importVisitor : Node Import -> Context -> ( List (Error {}), Context )
importVisitor node context =
    case Node.value node |> .moduleName |> Node.value of
        [ "Html" ] ->
            ( []
            , let
                exposed =
                    Node.value node
                        |> .exposingList
                        |> Maybe.map (Node.value >> Exposing.exposesFunction "text")
                        |> Maybe.withDefault False

                aliasing =
                    Node.value node |> .moduleAlias |> Maybe.map Node.value
              in
              Import { aliasing = aliasing, exposed = exposed }
            )

        _ ->
            ( [], context )


expressionVisitor : Node Expression -> Rule.Direction -> Context -> ( List (Error {}), Context )
expressionVisitor expression direction context =
    case ( direction, context ) of
        ( Rule.OnEnter, Import { aliasing, exposed } ) ->
            case Node.value expression of
                Expression.Application [ function, argument ] ->
                    case ( Node.value function, Node.value argument ) of
                        ( Expression.FunctionOrValue [] "text", Expression.Literal "" ) ->
                            if exposed then
                                -- then this "text" is `Html.text`
                                ( [ Rule.error error (Node.range expression) ], context )

                            else
                                ( [], context )

                        ( Expression.FunctionOrValue moduleName "text", Expression.Literal "" ) ->
                            if moduleName == (aliasing |> Maybe.withDefault [ "Html" ]) then
                                ( [ Rule.error error (Node.range expression) ], context )

                            else
                                ( [], context )

                        _ ->
                            ( [], context )

                _ ->
                    ( [], context )

        _ ->
            -- Either NoImport or not "onEnter"
            ( [], context )


error : { message : String, details : List String }
error =
    { message = "Do not use `Html.text \"\"` to represent \"Nothing\""
    , details =
        [ "Since your project is using Html.Extra please use one of the following function instead of `Html.text \"\"`"
        , " - Html.Extra.nothing"
        , " - Html.Extra.viewIf"
        , " - Html.Extra.viewMaybe"
        , " - Html.Extra.viewIfLazy"
        ]
    }
