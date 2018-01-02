var GameTitle = function(game){};

GameTitle.prototype = {

	create: function(){
            var me =this;
               title = game.add.audio('title');
               game.sound.setDecodedCallback(title, start, this);
               function start() {
            title.loopFull(0.8);
        }
             background = game.add.tileSprite(0, 0, 1400, 1920, "background2");
            var text = "Walking Warrior";
             var tex3 = "v0.6.5";
    var style = { font: "180px Forte", fill: "#ffc61e", align: "center" };
    var style2 = { font: "70px Forte", fill: "#ffc61e", align: "center" };
    var t = this.game.add.text(80, 100, text, style);
    var t2= this.game.add.text(50, 1840, tex3, style2); 
    button = game.add.button(460, 350, 'playbutton', actionOnClick, this, 2, 1, 0);
   button.scale.setTo(0.91,0.91);
   
//    button.onInputOver.add(over, this);
//    button.onInputOut.add(out, this);
//    button.onInputUp.add(up, this);
    function actionOnClick () {
        title.destroy();
    me.startGame();

}
infobutton = game.add.button(442, 850, 'infobutton', infoOnClick, this, 2, 1, 0);
        function infoOnClick () {
            this.game.state.start("Description");
         }  
selectbutton = game.add.button(442, 1380, 'selectbutton', selectOnClick, this, 2, 1, 0);
        function selectOnClick () {
            this.game.state.start("Info");
         }          
         
	},

	startGame: function(){
            title.stop();
            replays=3;
		this.game.state.start("Level1");
                
	}

}