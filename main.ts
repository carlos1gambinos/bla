let Angle = 0
pins.servoWritePin(AnalogPin.P0, 30)
basic.forever(function () {
    while (Angle <= 165) {
        Angle += 2
        pins.servoWritePin(AnalogPin.P0, Angle)
        basic.pause(35)
    }
    while (Angle >= 30) {
        Angle += -2
        pins.servoWritePin(AnalogPin.P0, Angle)
        basic.pause(35)
    }
})
