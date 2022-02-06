function turnLeft () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 100)
    basic.pause(400)
}
function stop () {
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
}
input.onButtonPressed(Button.A, function () {
    danceFlag = true
})
function driveBack () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Reverse, 100)
    basic.pause(800)
}
function turnRight () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Reverse, 100)
    basic.pause(400)
}
input.onButtonPressed(Button.B, function () {
    danceFlag = false
})
function driveForward () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 100)
    basic.pause(800)
}
let danceFlag = false
danceFlag = false
basic.forever(function () {
    if (danceFlag == true) {
        driveForward()
        turnLeft()
        driveBack()
        turnRight()
        turnRight()
        driveBack()
        turnRight()
        driveBack()
        driveForward()
        turnLeft()
        turnRight()
        turnRight()
        turnRight()
    } else {
        stop()
    }
})
