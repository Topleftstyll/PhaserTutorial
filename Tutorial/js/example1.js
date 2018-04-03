class example1 extends Phaser.Scene {
	constructor() {
		super({key:"example1"});
	}

	preload() {
		this.load.image('GFS', 'assets/mario.jpg');
	}

	create() {
		this.image = this.add.image(400, 300, 'GFS');
	}
}