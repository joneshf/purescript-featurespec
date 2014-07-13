module Test.Test.TvSetSpec where

  import Test.FeatureSpec

  type TvSet = {on :: Boolean}

  tvSet :: TvSet
  tvSet = {on: false}

  isOn :: TvSet -> Boolean
  isOn tv = tv.on

  pressPowerButton :: TvSet -> TvSet
  pressPowerButton tv = tv{on = not tv.on}

  main = spec "TvSetSpec" do
    info "As a TV set owner"
    info "I want to be able to turn the TV on and off"
    info "So I can watch TV when I want"
    info "And save energy when I'm not watching TV"

    feature "TV power button" do
      scenario "User presses power button when TV is off" do

        given "a TV set that is switched off"
        let tv = tvSet
        assert (not $ isOn tv) "tv is off"

        when "the power button is pressed"
        let tv' = pressPowerButton tv

        it "should switch on"
        assert (isOn tv') "tv should be on"

      scenario "User presses power button when TV is on" do

        given "a TV set that is switched on"
        let tv = tvSet
        let tv' = pressPowerButton tv
        assert (isOn tv') "tv starts on"

        when "the power button is pressed"
        let tv'' = pressPowerButton tv'

        it "should switch off"
        assert (not $ isOn tv'') "tv should be off"
