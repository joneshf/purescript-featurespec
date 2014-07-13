module Test.FeatureSpec where

  import Control.Monad.Eff
  import Control.Monad.RWS
  import Control.Monad.RWS.Class

  import Data.Array (filter, null)
  import Data.String
  import Data.String.Chalk
  import Data.Tuple

  import Debug.Trace

  type Log = [String]
  type Indent = String
  type FeatureSpec a = RWS Indent Log [Result] a

  data Result = Pending
              | Good String
              | Bad String

  instance eqResult :: Eq Result where
    (==) Pending  Pending   = true
    (==) (Good m) (Good m') = m == m'
    (==) (Bad m)  (Bad m')  = m == m'
    (==) _        _         = false

    (/=) res      res'      = not $ res == res'

  indent = "  "

  spec :: forall eff. String -> FeatureSpec Unit -> Eff (trace :: Trace | eff) Unit
  spec str features = case runRWS features indent [] of
    {log = log} -> do
      trace $ chalk Green "Spec: " ++ str
      trace $ joinWith "\n" log

  feature :: String -> FeatureSpec Unit -> FeatureSpec Unit
  feature str scenarios = do
    oldIndent <- ask
    let indent' = oldIndent ++ indent
    case runRWS scenarios indent' [] of
      {log = log, state = res} -> do
        tell [chalk Green (oldIndent ++ "Feature: ") ++ str]
        tell [joinWith "\n" log]

  scenario :: String -> FeatureSpec Unit -> FeatureSpec Unit
  scenario str tests = do
    oldIndent <- ask
    let indent' = oldIndent ++ indent
    case runRWS tests indent' [] of
      {log = log, state = res} -> do
        let badRes = filter badResult res
        let color = if null badRes then [Green] else [Red, Bold]
        tell [chalk' color (oldIndent ++ "Scenario: ") ++ str]
        tell [joinWith "\n" log]

  pending :: FeatureSpec Unit
  pending = do
    oldIndent <- ask
    tell [chalk Yellow (oldIndent ++ "pending")]
    modify ((:) Pending)

  given :: String -> FeatureSpec Unit
  given str = do
    oldIndent <- ask
    tell [chalk Green (oldIndent ++ "Given ") ++ str]

  when :: String -> FeatureSpec Unit
  when str = do
    oldIndent <- ask
    tell [chalk Green (oldIndent ++ "When ") ++ str]

  it :: String -> FeatureSpec Unit
  it str = do
    oldIndent <- ask
    tell [chalk Green (oldIndent ++ "It ") ++ str]

  info :: String -> FeatureSpec Unit
  info str = do
    oldIndent <- ask
    tell [oldIndent ++ str]

  assert :: Boolean -> String -> FeatureSpec Unit
  assert true  msg = modify $ (:) (Good msg)
  assert false msg = do
    oldIndent <- ask
    let error = oldIndent ++ chalk' [Red, Bold] "Failed " ++ msg
    modify $ (:) (Bad $ error)
    tell [error]

  assert' :: Boolean -> FeatureSpec Unit
  assert' b = assert b ""

  badResult :: Result -> Boolean
  badResult (Bad _) = true
  badResult _       = false
