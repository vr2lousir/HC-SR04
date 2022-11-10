let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    led.plotBarGraph(
    distance,
    50
    )
    serial.writeLine("" + (distance))
    basic.pause(500)
})
