input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        if (game.score() >= 3) {
            game.addLife(1)
        } else {
            if (game.score() >= 6) {
                game.addLife(1)
            }
        }
    } else {
        game.removeLife(1)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
game.setLife(3)
basic.showString("3 LIVES")
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    sprite.turn(Direction.Right, 45)
    if (game.score() >= 6) {
        basic.pause(100)
    } else {
        if (game.score() >= 3) {
            basic.pause(200)
        } else {
            basic.pause(500)
        }
    }
})
