var GameTitle = function(game){};

GameTitle.prototype = {

	create: function(){
            var me =this;
               title = game.add.audio('title');
               game.sound.setDecodedCallback(title, start, this);
               function start() {
            title.loopFull(0.8);
        }
             background = game.add.tileSprite(0, 0, 1400, 1920, "background");
            var text = "Walking Warrior";
    var style = { font: "180px Arial", fill: "#000", align: "center" };
    var t = this.game.add.text(80, 100, text, style);
    
    button = game.add.button(460, 400, 'playbutton', actionOnClick, this, 2, 1, 0);
   button.scale.setTo(0.91,0.91);
   
//    button.onInputOver.add(over, this);
//    button.onInputOut.add(out, this);
//    button.onInputUp.add(up, this);
    function actionOnClick () {

    me.startGame();

}
infobutton = game.add.button(442, 900, 'infobutton', infoOnClick, this, 2, 1, 0);
        function infoOnClick () {
            this.game.state.start("Info");
         }   
	},

	startGame: function(){
            title.stop();
		this.game.state.start("Main");
                
	}

}