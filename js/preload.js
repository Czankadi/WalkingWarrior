var Preload = function(game){};

Preload.prototype = {

	preload: function(){ 
		this.game.load.image('1', 'assets/gemBlue.png');
		this.game.load.image('2', 'assets/gemGreen.png');
		this.game.load.image('3', 'assets/gemRed.png');
		this.game.load.image('4', 'assets/gemYellow.png');
		this.game.load.image('5', 'assets/gemBonusBlue.png');
		this.game.load.image('6', 'assets/gemBonusGreen.png');
		this.game.load.image('7', 'assets/gemBonusRed.png');
		this.game.load.image('8', 'assets/gemBonusYellow.png');
                game.load.spritesheet('button', 'assets/startbutton.png');
	},

	create: function(){
		this.game.state.start("GameTitle");
	}
}