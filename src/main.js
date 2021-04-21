//Mariel Folkerts, Rocket Patrol Mod 4/20/21
//Took around 8-9 hours from initial commit

//Points Breakdown:
//60: Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi)
//20: Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points 
//    (small red dragon worth 40 points)
//10: Implement parallax scrolling
//10: Create a new animated sprite for the Spaceship enemies 
//Total: 100






let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;