function setPix (xp: number, xy: number, color: number) {
    Universe[getSPOT(xp, xy)] = color
}
function distGoal (Cx: number, Cy: number) {
    return Math.sqrt((Cy - Diam) * (Cy - Diam) + (Cx - Diam) * (Cx - Diam))
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
    yy = 0
    xx = 0
    while (mx != Diam && my != Diam) {
        xx += randint(-1, 1)
        yy += randint(-1, 1)
        odist = distGoal(mx, my)
        if (xx < 0) {
            xx = 0
        }
        if (yy < 0) {
            yy = 0
        }
        if (xx > Diam) {
            xx = Diam
        }
        if (yy > Diam) {
            yy = Diam
        }
        while (odist <= distGoal(xx, yy)) {
            xx += randint(-1, 1)
            yy += randint(-1, 1)
            if (xx < 0) {
                xx = 0
            }
            if (yy < 0) {
                yy = 0
            }
            if (xx > Diam) {
                xx = Diam
            }
            if (yy > Diam) {
                yy = Diam
            }
        }
        mx = xx
        my = yy
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
let Sav = 0
let odist = 0
let xx = 0
let yy = 0
let mx = 0
let my = 0
let Diam = 0
let Universe: number[] = []
let Unisize = 0
let Diameter = 0
let y = 0
let x = 0
x = 0
y = 0
Diameter = 100
Unisize = Diameter * Diameter
Universe = [0]
Diam = Diameter - 1
for (let index = 0; index < Unisize; index++) {
    Universe.push(0)
}
showUNI(x, y)
loops.everyInterval(500, function () {
    Sav = led.pointBrightness(0, 0)
    for (let index = 0; index < 4; index++) {
        led.plotBrightness(0, 0, 255)
        basic.pause(100)
        led.plotBrightness(0, 0, Sav)
    }
})
