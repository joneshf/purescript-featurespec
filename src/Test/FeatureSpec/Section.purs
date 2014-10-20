module Test.FeatureSpec.Section
  ( feature
  , ignore
  , scenario
  , spec
  ) where

  import Control.Monad (when)
  import Control.Monad.Eff.Exception (error, throwException)
  import Control.Monad.RWS (ask, put, tell)
  import Control.Monad.RWS.Trans (execRWST)
  import Control.Monad.Trans (lift)

  import Data.Array (filter, length)
  import Data.Foldable (any, elem)
  import Data.String (joinWith)
  import Data.String.Chalk
  import Data.Tuple (Tuple(..))

  import Debug.Trace

  import Test.FeatureSpec.Types

  spec :: forall eff. String -> FeatureSpec Unit -> FeatureSpec Unit
  spec str features = do
    Tuple res log <- lift $ execRWST features indent []
    lift $ trace $ chalk (colorize res) "Spec" ++ ": " ++ str
    lift $ trace $ joinWith "\n" log
    let bad = filter isBad res
    when (length bad > 0) $
      lift $ throwException $ error $ show (length bad) ++ " error(s)."

  feature :: String -> FeatureSpec Unit -> FeatureSpec Unit
  feature = section "Feature"

  scenario :: String -> FeatureSpec Unit -> FeatureSpec Unit
  scenario = section "Scenario"

  section :: String -> String -> FeatureSpec Unit -> FeatureSpec Unit
  section topic sentence scenarios = do
    oldIndent <- ask
    Tuple res log <- lift $ execRWST scenarios (oldIndent ++ indent) []
    put res
    tell [oldIndent ++ chalk (colorize res) topic ++ ": " ++ sentence]
    tell [joinWith "\n" log]
    let bad = filter isBad res
    when (length bad > 0) $
      lift $ throwException $ error $ show (length bad) ++ " error(s)."

  ignore  :: String -> FeatureSpec Unit -> FeatureSpec Unit
  ignore str _ = do
    oldIndent <- ask
    tell [oldIndent ++ chalk' [Gray, Dim] ("Ignore: " ++ str)]

  indent :: Indent
  indent = "  "

  colorize :: [Result] -> Style
  colorize res | any isBad res      = Red
  colorize res | Pending `elem` res = Yellow
  colorize _                        = Green

  isBad :: Result -> Boolean
  isBad (Bad _) = true
  isBad _       = false
