function setPix (xp: number, xy: number, color: number) {
    Universe[getSPOT(xp, xy)] = color
}
function showUNI (xx: number, yy: number) {
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            led.plotBrightness(index2, index, Universe[getSPOT(xx + index2, yy + index)])
        }
    }
}
input.onButtonPressed(Button.A, function () {
    x += 1
    if (x > 10) {
        x = 0
    }
    showUNI(x, y)
})
input.onButtonPressed(Button.AB, function () {
    mkMaze()
    showUNI(x, y)
})
input.onButtonPressed(Button.B, function () {
    y += 1
    if (y > 10) {
        y = 0
    }
    showUNI(x, y)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showString("X:")
    basic.showNumber(x)
    basic.pause(100)
    basic.showString("Y:")
    basic.showNumber(y)
    basic.pause(100)
    showUNI(x, y)
})
function mkMaze () {
    for (let index = 0; index <= Unisize - 1; index++) {
        Universe[index] = randint(100, 200)
    }
    setPix(0, 0, 0)
    x = 0
    y = 0
    my = 0
    mx = 0
    while (mx != Diameter - 1 && my != Diameter - 1) {
        mx += randint(-1, 1)
        my += randint(-1, 1)
        if (mx < 0) {
            mx = 0
        }
        if (my < 0) {
            my = 0
        }
        if (mx > Diameter - 1) {
            mx = Diameter - 1
        }
        if (my > Diameter - 1) {
            my = Diameter - 1
        }
        setPix(mx, my, 0)
    }
}
function getY (spot: number) {
    return Math.trunc(spot / Diameter)
}
function getSPOT (xx: number, yy: number) {
    return xx + yy * Diameter
}
function getX (spot: number) {
    return spot % Diameter
}
let mx = 0
let my = 0
let Universe: number[] = []
let Unisize = 0
let Diameter = 0
let y = 0
let x = 0
x = 0
y = 0
let mode = 0
Diameter = 100
Unisize = Diameter * Diameter
Universe = [0]
for (let index = 0; index < Unisize; index++) {
    Universe.push(0)
}
showUNI(x, y)
basic.forever(function () {
	
})
