module Test.FeatureSpec.Assert
  ( assert
  , assert'
  , assertJust
  , assertJust'
  , assertLeft
  , assertLeft'
  , assertNothing
  , assertNothing'
  , assertRight
  , assertRight'
  ) where

  import Control.Monad.RWS

  import Data.Either
  import Data.Maybe
  import Data.String.Chalk

  import Test.FeatureSpec.Types

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

  generalAssert :: forall a. (a -> Boolean) -> a -> String -> FeatureSpec Unit
  generalAssert test x msg | test x = modify $ (:) (Good msg)
  generalAssert _    _ msg          = do
    oldIndent <- ask
    let error = oldIndent ++ chalk' [Red, Bold] "Failed" ++ " " ++ msg
    modify $ (:) (Bad error)
    tell [error]
