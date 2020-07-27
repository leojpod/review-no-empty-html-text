# No-empty-html-text

## What is it?

This is a simple rule for the [`elm-review`](https://package.elm-lang.org/packages/jfmengels/elm-review/latest/) tool that will flag the use of the `Html.text` function as a mean to show nothing. It is quite often the case that we see the following pattern in elm code:

```elm
if a then
  viewA a
else
  text ""
```

However, there is the quite nice [`elm-community/html-extra`](https://package.elm-lang.org/packages/elm-community/html-extra/latest/) package that provide utility functions to "replace" those `text ""` by an alias [`nothing`](https://package.elm-lang.org/packages/elm-community/html-extra/latest/Html-Extra#nothing) or by some other utility functions (e.g [`viewIf`](https://package.elm-lang.org/packages/elm-community/html-extra/latest/Html-Extra#viewIf), [`viewMaybe`](https://package.elm-lang.org/packages/elm-community/html-extra/latest/Html-Extra#viewMaybe), ...)

## Why should you use it?

- if you've just installed `html-extra` on an already existing project chances are that you've plenty of `text ""` dispersed across many files. Setting up elm-review and using this rule would be a good way to find and fix them all.
- if you are already got the habit of using the function from `html-extra` but you'd like to make sure that newcomers will get directed to the proper doc when they start on your project, this is also a good option.

## Why should you not use it?

- if you do not mind `text ""` in your code.
- if you do not want to use `html-extra`.
- if you do not want to setup `elm-review`.
- ...

## Example configuration

```elm
import NoEmptyText
import Review.Rule exposing (Rule)

config : List Rule
config =
  [ NoEmptyText.rule
  ]
```
