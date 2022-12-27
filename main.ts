let correct = 0
let code = 0
game.startCountdown(5000)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        basic.pause(100)
    }
    code = randint(0, 1)
    if (code == 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . . # .
            # # # . .
            `)
    }
    for (let index = 0; index < 30; index++) {
        correct = 0
        if (input.buttonIsPressed(Button.A)) {
            if (input.buttonIsPressed(Button.B)) {
                correct = 0
            } else {
                if (code == 0) {
                    correct = 1
                    break;
                } else {
                    correct = 0
                    break;
                }
            }
        } else {
            if (input.buttonIsPressed(Button.B)) {
                if (code == 1) {
                    correct = 1
                    break;
                } else {
                    correct = 0
                    break;
                }
            }
        }
        basic.pause(100)
    }
    if (correct == 0) {
        game.gameOver()
    } else {
        game.addScore(1)
    }
})
