input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Spieler.change(LedSpriteProperty.X, -1)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Spieler.set(LedSpriteProperty.X, -1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Spieler.change(LedSpriteProperty.X, 1)
    Spieler.ifOnEdgeBounce()
})
let Spieler: game.LedSprite = null
let Steinhöhe = -5
Spieler = game.createSprite(2, 4)
let Stein = game.createSprite(randint(0, 4), Steinhöhe)
basic.forever(function () {
    Steinhöhe += 1
    if (Steinhöhe < 0) {
        Stein.set(LedSpriteProperty.Brightness, 10)
    } else {
        Stein.set(LedSpriteProperty.Brightness, 255)
    }
    Stein.set(LedSpriteProperty.Y, Steinhöhe)
    if (Stein.isTouching(Spieler)) {
        basic.setLedColor(0xff0000)
    }
    basic.pause(200)
})
