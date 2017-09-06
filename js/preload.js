var Preload = function(game){};

Preload.prototype = {

	preload: function(){ 
		this.game.load.image('1', 'assets/Nerve Cell.png');
		this.game.load.image('2', 'assets/neutrophil.png');
		this.game.load.image('3', 'assets/platelet.png');
		this.game.load.image('4', 'assets/Redbloodcell.png');
		this.game.load.image('5', 'assets/Stem Cell.png');
		this.game.load.image('6', 'assets/white blood cell.png');
                this.game.load.image('7', 'assets/BNerve Cell.png');
                this.game.load.image('8', 'assets/bneutrophil.png');
                this.game.load.image('9', 'assets/bplatelet.png');
                this.game.load.image('10', 'assets/BRedbloodcell.png');
                this.game.load.image('11', 'assets/BStem Cell.png');
                this.game.load.image('12', 'assets/bwhite blood cell.png');
                this.game.load.spritesheet('button', 'assets/startbutton.png');
                this.game.load.image("background", "assets/background.jpg");
	},

	create: function(){
		this.game.state.start("GameTitle");
	}
}