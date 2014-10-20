module Test.Test.FeatureSpec where

  import Control.Monad.RWS.Trans (runRWST)

  import Data.Foldable (traverse_)

  import Test.StackFeatureSpec
  import Test.TvSetFeatureSpec

  main = traverse_ (\spec -> runRWST spec "" [])
    [ tvSetFeatureSpec
    , stackFeatureSpec
    ]
