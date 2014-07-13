# Module Documentation

## Module Test.FeatureSpec

### Types

    type FeatureSpec a = RWS Indent Log [Result] a

    type GivenWhenThen  = FeatureSpec Unit

    type Indent  = String

    type Log  = [String]

    data Result where
      Pending :: Result
      Good :: String -> Result
      Bad :: String -> Result


### Type Class Instances

    instance eqResult :: Eq Result


### Values

    assert :: Boolean -> String -> FeatureSpec Unit

    assert' :: Boolean -> FeatureSpec Unit

    badResult :: Result -> Boolean

    feature :: String -> FeatureSpec Unit -> FeatureSpec Unit

    given :: String -> FeatureSpec Unit

    info :: String -> FeatureSpec Unit

    it :: String -> FeatureSpec Unit

    pending :: FeatureSpec Unit

    scenario :: String -> FeatureSpec Unit -> FeatureSpec Unit

    spec :: forall eff. String -> FeatureSpec Unit -> Eff (trace :: Trace | eff) Unit

    when :: String -> FeatureSpec Unit



