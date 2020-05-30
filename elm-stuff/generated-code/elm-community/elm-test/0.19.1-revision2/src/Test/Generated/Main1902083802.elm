module Test.Generated.Main1902083802 exposing (main)

import NoEmptyTextTest

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "NoEmptyTextTest" [NoEmptyTextTest.suite] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 276552228556038, processes = 8, paths = ["/Users/leojpod/Dev/jpoding/no-empty-html-text/tests/NoEmptyTextTest.elm"]}