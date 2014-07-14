module Test.FeatureSpec where

  import Control.Monad.Eff
  import Control.Monad.RWS
  import Control.Monad.RWS.Class

  import Data.Array (filter, null)
  import Data.Either
  import Data.Foldable (any, elem)
  import Data.Maybe
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

  data Phrase = Info
              | Given
              | When
              | It
              | And
              | But

  instance showPhrase :: Show Phrase where
    show Info  = ""
    show Given = "Given "
    show When  = "When "
    show It    = "It "
    show And   = "And "
    show But   = "But "

  instance eqResult :: Eq Result where
    (==) Pending  Pending   = true
    (==) (Good m) (Good m') = m == m'
    (==) (Bad m)  (Bad m')  = m == m'
    (==) _        _         = false

    (/=) res      res'      = not $ res == res'

  indent = "  "

  spec :: forall eff. String -> FeatureSpec Unit -> Eff (trace :: Trace | eff) Unit
  spec str features = case runRWS features indent [] of
    {log = log, state = res} -> do
      trace $ chalk (colorize res) "Spec" ++ ": " ++ str
      trace $ joinWith "\n" log

  section :: String -> String -> FeatureSpec Unit -> FeatureSpec Unit
  section topic sentence scenarios = do
    oldIndent <- ask
    let indent' = oldIndent ++ indent
    case runRWS scenarios indent' [] of
      {log = log, state = res} -> do
        put res
        tell [oldIndent ++ chalk (colorize res) topic ++ ": " ++ sentence]
        tell [joinWith "\n" log]

  feature :: String -> FeatureSpec Unit -> FeatureSpec Unit
  feature = section "Feature"

  scenario :: String -> FeatureSpec Unit -> FeatureSpec Unit
  scenario = section "Scenario"

  ignore  :: String -> FeatureSpec Unit -> FeatureSpec Unit
  ignore str _ = do
    oldIndent <- ask
    tell [oldIndent ++ chalk' [Gray, Dim] ("Ignore: " ++ str)]

  colorize :: [Result] -> Style
  colorize res | any isBad res      = Red
  colorize res | Pending `elem` res = Yellow
  colorize _                        = Green

  isBad :: Result -> Boolean
  isBad (Bad _) = true
  isBad _       = false

  pending :: FeatureSpec Unit
  pending = do
    oldIndent <- ask
    tell [oldIndent ++ chalk Yellow "pending"]
    modify ((:) Pending)

  phrase :: Phrase -> String -> FeatureSpec Unit
  phrase topic sentence = do
    oldIndent <- ask
    tell [oldIndent ++ chalk Green (show topic) ++ sentence]

  info :: String -> FeatureSpec Unit
  info = phrase Info

  given :: String -> FeatureSpec Unit
  given = phrase Given

  when :: String -> FeatureSpec Unit
  when = phrase When

  it :: String -> FeatureSpec Unit
  it = phrase It

  and :: String -> FeatureSpec Unit
  and = phrase And

  but :: String -> FeatureSpec Unit
  but = phrase But

  generalAssert :: forall a. (a -> Boolean) -> a -> String -> FeatureSpec Unit
  generalAssert test x msg | test x = modify $ (:) (Good msg)
  generalAssert _    _ msg          = do
    oldIndent <- ask
    let error = oldIndent ++ chalk' [Red, Bold] "Failed" ++ " " ++ msg
    modify $ (:) (Bad error)
    tell [error]

  assert :: Boolean -> FeatureSpec Unit
  assert b = assert' b ""

  assert' :: Boolean -> String -> FeatureSpec Unit
  assert' = generalAssert id

  assertJust :: forall a. Maybe a -> FeatureSpec Unit
  assertJust m = assertJust' m ""

  assertNothing :: forall a. Maybe a -> FeatureSpec Unit
  assertNothing m = assertNothing' m ""

  assertJust' :: forall a. Maybe a -> String -> FeatureSpec Unit
  assertJust' = generalAssert isJust

  assertNothing' :: forall a. Maybe a -> String -> FeatureSpec Unit
  assertNothing' = generalAssert isNothing

  assertLeft :: forall a b. Either a b -> FeatureSpec Unit
  assertLeft e = assertLeft' e ""

  assertRight :: forall a b. Either a b -> FeatureSpec Unit
  assertRight e = assertRight' e ""

  assertLeft' :: forall a b. Either a b -> String -> FeatureSpec Unit
  assertLeft' = generalAssert isLeft

  assertRight' :: forall a b. Either a b -> String -> FeatureSpec Unit
  assertRight' = generalAssert isRight
