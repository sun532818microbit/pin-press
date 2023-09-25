def on_forever():
    if input.pin_is_pressed(TouchPin.P1):
        basic.show_icon(IconNames.HAPPY)
    elif input.pin_is_pressed(TouchPin.P1):
        basic.show_icon(IconNames.SAD)
    else:
        basic.clear_screen()
basic.forever(on_forever)
