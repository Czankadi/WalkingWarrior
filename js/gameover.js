var GameOver = function(game){};

GameOver.prototype = {

  	create: function(){
            var me =this;
            game.stage.backgroundColor = '#182d3b';
            var text = "Game over";
             var style = { font: "100px Arial", fill: "#000", align: "center" };
        var t = this.game.add.text(220, 100, text, style);

	},

	restartGame: function(){
		this.game.state.start("GameTitle");
	}
	
}