module Test.FeatureSpec where

  import qualified Test.FeatureSpec.Assert as FSA
  import qualified Test.FeatureSpec.Phrase as FSP
  import qualified Test.FeatureSpec.Section as FSS

  {- |  The main FeatureSpec module.
        You should only have to import this module.
        This module should export all of the available API.
        If you need types you will have to import them separately.
  -}

  -- | Export Assert functions.
  assert         = FSA.assert
  assert'        = FSA.assert'
  assertJust     = FSA.assertJust
  assertJust'    = FSA.assertJust'
  assertLeft     = FSA.assertLeft
  assertLeft'    = FSA.assertLeft'
  assertNothing  = FSA.assertNothing
  assertNothing' = FSA.assertNothing'
  assertRight    = FSA.assertRight
  assertRight'   = FSA.assertRight'

  -- | Export Phrase functions.
  and     = FSP.and
  but     = FSP.but
  given   = FSP.given
  info    = FSP.info
  it      = FSP.it
  pending = FSP.pending
  when    = FSP.when

  -- | Export Section functions.
  feature  = FSS.feature
  ignore   = FSS.ignore
  scenario = FSS.scenario
  spec     = FSS.spec
