basic.forever(function on_forever() {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.Happy)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.clearScreen()
    }
    
})
