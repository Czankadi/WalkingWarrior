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
                this.game.load.spritesheet('playbutton', 'assets/startbutton.png');
                this.game.load.spritesheet('infobutton', 'assets/infobutton.png');
                this.game.load.spritesheet('backbutton', 'assets/backbutton.png');
                this.game.load.spritesheet('switch', 'assets/switch.png');
                this.game.load.spritesheet('redswitch', 'assets/redswitch.png');
                this.game.load.image("background", "assets/background.jpg");
                this.game.load.audio('title', 'assets/title.m4a');
                this.game.load.audio('game', 'assets/game.m4a');
	},

	create: function(){
		this.game.state.start("GameTitle");
	}
}