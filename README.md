# Module Documentation

## Module Test.FeatureSpec

## Module Test.FeatureSpec.Assert

### Values

    assert :: Boolean -> FeatureSpec Unit

    assert' :: Boolean -> String -> FeatureSpec Unit

    assertJust :: forall a. Maybe a -> FeatureSpec Unit

    assertJust' :: forall a. Maybe a -> String -> FeatureSpec Unit

    assertLeft :: forall a b. Either a b -> FeatureSpec Unit

    assertLeft' :: forall a b. Either a b -> String -> FeatureSpec Unit

    assertNothing :: forall a. Maybe a -> FeatureSpec Unit

    assertNothing' :: forall a. Maybe a -> String -> FeatureSpec Unit

    assertRight :: forall a b. Either a b -> FeatureSpec Unit

    assertRight' :: forall a b. Either a b -> String -> FeatureSpec Unit


## Module Test.FeatureSpec.Phrase

### Values

    and :: String -> FeatureSpec Unit

    but :: String -> FeatureSpec Unit

    given :: String -> FeatureSpec Unit

    info :: String -> FeatureSpec Unit

    it :: String -> FeatureSpec Unit

    pending :: FeatureSpec Unit

    when :: String -> FeatureSpec Unit


## Module Test.FeatureSpec.Section

### Values

    feature :: String -> FeatureSpec Unit -> FeatureSpec Unit

    ignore :: String -> FeatureSpec Unit -> FeatureSpec Unit

    scenario :: String -> FeatureSpec Unit -> FeatureSpec Unit

    spec :: forall eff. String -> FeatureSpec Unit -> FeatureSpec Unit


## Module Test.FeatureSpec.Types

### Types

    type FeatureSpec a = forall eff. RWST Indent Log Results (Eff (trace :: Trace, err :: Exception | eff)) a

    type Indent  = String

    type Log  = [String]

    data Phrase where
      Info :: Phrase
      Given :: Phrase
      When :: Phrase
      It :: Phrase
      And :: Phrase
      But :: Phrase

    data Result where
      Pending :: Result
      Good :: String -> Result
      Bad :: String -> Result

    type Results  = [Result]


### Type Class Instances

    instance eqResult :: Eq Result

    instance showPhrase :: Show Phrase



