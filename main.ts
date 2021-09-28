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
function getY (spot: number) {
    return Math.trunc(spot / Diameter)
}
function getSPOT (xx: number, yy: number) {
    return xx + yy * Diameter
}
function getX (spot: number) {
    return spot % Diameter
}
let Universe: number[] = []
let Diameter = 0
let x = 0
let y = 0
let mode = 0
Diameter = 100
let Unisize = Diameter * Diameter
Universe = [0]
for (let index = 0; index < Unisize; index++) {
    Universe.push(0)
}
basic.forever(function () {
	
})
