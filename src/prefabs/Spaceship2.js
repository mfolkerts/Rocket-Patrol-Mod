// Spaceship prefab
class Spaceship2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue;   // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed2;         // pixels per frame
        this.anims.create({
            key: 'dragonfly',
            frames: this.anims.generateFrameNumbers('dragon', { start: 0, end: 1, first: 0}),
            frameRate: 3,
            repeat: -1
        });
        this.anims.play('dragonfly');
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    // position reset
    reset() {
        this.x = game.config.width;
    }
}