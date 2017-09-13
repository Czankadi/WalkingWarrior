var GameOver = function(game){};

GameOver.prototype = {
    
   
  	create: function(){
            var me =this;
           
            background = game.add.tileSprite(0, 0, 1400, 1920, "background");;
            var text = "Game over";
             var style = { font: "100px Arial", fill: "#000", align: "center" };
        var t = this.game.add.text(520, 100, text, style);

	},

	restartGame: function(){
		this.game.state.start("GameTitle");
	}
	
}