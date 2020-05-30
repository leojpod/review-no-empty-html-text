module NoEmptyTextTest exposing (suite)

import NoEmptyText as NoEmptyText
import Review.Test
import Test exposing (Test, describe, test)


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


suite : Test
suite =
    describe "NoEmptyText"
        [ test "should not report anything if there is no `text \"\"` - not even imported " <|
            \() ->
                """
module A exposing (..)

foo : String
foo = "bar"
    """
                    |> Review.Test.run NoEmptyText.rule
                    |> Review.Test.expectNoErrors
        , test "should not report anything if `text \"\"` is not form Html" <|
            \() ->
                """
module A exposing (..)

import Html

text: String -> String
text = identity


foo : Html.Html msg
foo = Html.text <| text ""
    """
                    |> Review.Test.run NoEmptyText.rule
                    |> Review.Test.expectNoErrors
        , test "it should detect `Html.text \"\"`" <|
            \() ->
                """
module A exposing (..)

import Html 

foo : Html.Html msg
foo = Html.text ""
            """
                    |> Review.Test.run NoEmptyText.rule
                    |> Review.Test.expectErrors
                        [ Review.Test.error
                            { message = error.message
                            , details = error.details
                            , under = "Html.text \"\""
                            }
                        ]
        , test "it should detect `text \"\"`" <|
            \() ->
                """
module A exposing (..)

import Html exposing (text)

foo : Html.Html msg
foo = text ""
          """
                    |> Review.Test.run NoEmptyText.rule
                    |> Review.Test.expectErrors
                        [ Review.Test.error
                            { message = error.message
                            , details = error.details
                            , under = "text \"\""
                            }
                        ]
        , test "it should detect `H.text \"\"`" <|
            \() ->
                """
module A exposing (..)

import Html as H exposing (text)

foo : Html.Html msg
foo = H.text ""
            """
                    |> Review.Test.run NoEmptyText.rule
                    |> Review.Test.expectErrors
                        [ Review.Test.error
                            { message = error.message
                            , details = error.details
                            , under = "H.text \"\""
                            }
                        ]
        , test "it should detect all possible errors (even though this example doesn't compile)" <|
            \() ->
                """
module A exposing (..)

import Html as H exposing (text)

foo : Html.Html msg
foo = Html.div [ ] 
  [H.text ""
  , text ""
  , Html.text ""]
                            """
                    |> Review.Test.run NoEmptyText.rule
                    |> Review.Test.expectErrors
                        [ Review.Test.error
                            { message = error.message
                            , details = error.details
                            , under = "H.text \"\""
                            }
                        , Review.Test.error
                            { message = error.message
                            , details = error.details
                            , under = "text \"\""
                            }
                            |> Review.Test.atExactly { start = { row = 9, column = 5 }, end = { row = 9, column = 12 } }
                        ]
        ]
