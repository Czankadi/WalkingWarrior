var Info = function(game){};

Info.prototype = {

	create: function(){
            var me =this;
             background = game.add.tileSprite(0, 0, 1400, 1920, "background");
            var text = "Info will be here";
    var style = { font: "110px Arial", fill: "#000", align: "center" };
    var t = this.game.add.text(300, 500, text, style);
    
    button = game.add.button(314, 760, 'backbutton', actionOnClick2, this, 2, 1, 0);
        button.scale.setTo(1.5,1.5);
//    button.onInputOver.add(over, this);
//    button.onInputOut.add(out, this);
//    button.onInputUp.add(up, this);
    function actionOnClick2 () {

    this.game.state.start("GameTitle");

}

        }
}
