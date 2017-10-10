var NextLevel = function(game){};

NextLevel.prototype = {
    
   
  	create: function(){
            var me =this;
           
            background = game.add.tileSprite(0, 0, 1400, 1920, "background");;
            var text = "Level Completed!!";
             var style = { font: "100px Arial", fill: "#000", align: "center" };
        var t = this.game.add.text(520, 100, text, style);
     button = game.add.button(460, 400, 'playbutton', actionOnClick, this, 2, 1, 0);
   button.scale.setTo(0.91,0.91);
   
//    button.onInputOver.add(over, this);
//    button.onInputOut.add(out, this);
//    button.onInputUp.add(up, this);
    function actionOnClick () {

    me.restartGame();

}

	},

	restartGame: function(){
            if (s==1){
		this.game.state.start("Level2");
            }
            if (s==2){
                this.game.state.start("Level2");
            }
	}
	
}