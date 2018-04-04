class example1 extends Phaser.Scene {
	constructor() {
		super({ key:"example1" });
	}

	preload() {
		this.load.image('GFS', 'assets/mario.jpg');
	}

	create() {
		this.image = this.add.image(400, 300, 'GFS');
		// this.input.keyboard.on('keyup_D', function(event) {
		// 	this.image.x += 10;
		// }, this);

		this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

		this.input.on('pointerdown', function(event) {
			this.image.x = event.x;
			this.image.y = event.y;
		}, this);

		this.input.keyboard.on('keyup_P', function(event) {
			var physicsImage = this.physics.add.image(this.image.x, this.image.y, "GFS");
			physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100, 100), -300);
		}, this);

		this.input.keyboard.on('keyup', function(e) {
			if(e.key == "2") {
				this.scene.start("example2");
			}

			if(e.key == "3") {
				this.scene.start("example3");
			}
		}, this);
	}

	update(delta) {
		if(this.key_A.isDown) {
			this.image.x--;
		}

		if(this.key_D.isDown) {
			this.image.x++;
		}

		if(this.key_W.isDown) {
			this.image.y--;
		}

		if(this.key_S.isDown) {
			this.image.y++;
		}
	}
}