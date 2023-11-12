let strip = informatiktheater.create(HiwonderPins.P2, 50, PowerSource.Intern)
basic.forever(function () {
    strip.setPixelColorRange(randint(0, strip.length()), 0xffa500, 10)
    strip.show()
    strip.shift(1)
    basic.pause(100)
})
