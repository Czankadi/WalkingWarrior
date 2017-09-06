var GameTitle = function(game){};

GameTitle.prototype = {

	create: function(){
            var me =this;
             background = game.add.tileSprite(0, 0, 1200, 1200, "background");
            var text = "Walking Warrior";
    var style = { font: "100px Arial", fill: "#000", align: "center" };
    var t = this.game.add.text(220, 100, text, style);
    
    button = game.add.button(442, 400, 'button', actionOnClick, this, 2, 1, 0);
   
//    button.onInputOver.add(over, this);
//    button.onInputOut.add(out, this);
//    button.onInputUp.add(up, this);
    function actionOnClick () {

    me.startGame();

}
//            var scoreFont = "100px Arial";
//            me.titleLabel = me.game.add.text(600, 600, "0", {font: scoreFont, fill: "#fff"}); 
//		me.titleLabel.anchor.setTo(0, 0);
//		me.titleLabel.align = 'center';
//                me.titleLabel.text = me.moves;  
//                me.titleLabel ="Walking warrior";
                
          //  me.startGame();
	},

	startGame: function(){
		this.game.state.start("Main");
	}

}