let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . 7 7 . . 7 . 7 7 . . . . 
. . . . 7 . . . . . . 7 . . . . 
. . . . 7 . . . . . . 7 . . . . 
. . . . 7 7 7 . . 7 7 . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . . . . 7 . 7 7 7 7 . . . 
. . . . . . 7 . . . . . . . . . 
. . . . . . 7 . . . . . . . . . 
. . . . . . 7 . . . . . . . . . 
. . . . . . 7 . . . . . . . . . 
. . . . 7 7 . 7 7 . . . . . . . 
. 7 7 7 . . . . 7 7 . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite.setPosition(80, 110)
let Hoop = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 . . . . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . 2 2 . . . . . 2 2 . . . 
. . . 2 2 . . . . . . . 2 . . . 
. . . 2 . . . . . . . . . 2 . . 
. . . 2 . . . . . . . . . 2 . . 
. . . 2 . . . . . . . . . 2 . . 
. . . . 2 . . . . . . . . 2 . . 
. . . . 2 . . . . . . . 2 . . . 
. . . . . 2 2 . . 2 2 2 2 . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
Hoop.setPosition(80, 10)
Hoop.x += 50
