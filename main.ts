music.setBuiltInSpeakerEnabled(true)
let opakování = 1
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
    if (input.soundLevel() >= 50) {
        opakování = 0
    }
    while (opakování == 0) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 4971, 0, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
    while (opakování == 0) {
        strip.show()
        kitronik_servo_lite.left()
    }
})
