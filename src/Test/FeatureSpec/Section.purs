module Test.FeatureSpec.Section
  ( feature
  , ignore
  , scenario
  , spec
  ) where

  import Control.Monad.Eff
  import Control.Monad.RWS

  import Data.Foldable (any, elem)
  import Data.String (joinWith)
  import Data.String.Chalk

  import Debug.Trace

  import Test.FeatureSpec.Types

  spec :: forall eff. String -> FeatureSpec Unit -> Eff (trace :: Trace | eff) Unit
  spec str features = case runRWS features indent [] of
    {log = log, state = res} -> do
      trace $ chalk (colorize res) "Spec" ++ ": " ++ str
      trace $ joinWith "\n" log

  feature :: String -> FeatureSpec Unit -> FeatureSpec Unit
  feature = section "Feature"

  scenario :: String -> FeatureSpec Unit -> FeatureSpec Unit
  scenario = section "Scenario"

  section :: String -> String -> FeatureSpec Unit -> FeatureSpec Unit
  section topic sentence scenarios = do
    oldIndent <- ask
    let indent' = oldIndent ++ indent
    case runRWS scenarios indent' [] of
      {log = log, state = res} -> do
        put res
        tell [oldIndent ++ chalk (colorize res) topic ++ ": " ++ sentence]
        tell [joinWith "\n" log]

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
