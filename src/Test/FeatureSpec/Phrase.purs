module Test.FeatureSpec.Phrase
  ( and
  , but
  , given
  , info
  , it
  , pending
  , when
  ) where

  import Control.Monad.RWS

  import Data.String.Chalk

  import Test.FeatureSpec.Types

  pending :: FeatureSpec Unit
  pending = do
    oldIndent <- ask
    tell [oldIndent ++ chalk Yellow "pending"]
    modify ((:) Pending)

  and :: String -> FeatureSpec Unit
  and = phrase And

  but :: String -> FeatureSpec Unit
  but = phrase But

  info :: String -> FeatureSpec Unit
  info = phrase Info

  it :: String -> FeatureSpec Unit
  it = phrase It

  given :: String -> FeatureSpec Unit
  given = phrase Given

  when :: String -> FeatureSpec Unit
  when = phrase When

  phrase :: Phrase -> String -> FeatureSpec Unit
  phrase topic sentence = do
    oldIndent <- ask
    tell [oldIndent ++ chalk Green (show topic) ++ sentence]
