module Test.FeatureSpec.Types where

  import Control.Monad.RWS

  type Log = [String]
  type Indent = String
  type Results = [Result]
  type FeatureSpec a = RWS Indent Log Results a

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
