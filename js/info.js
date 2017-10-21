var Info = function(game){};

Info.prototype = {

	create: function(){
            var me =this;
             background = game.add.tileSprite(0, 0, 1400, 1920, "background");
            var text = "Select Level";
            var text2 = "Practice Levels";
    var style = { font: "110px Arial", fill: "#000", align: "center" };
    var style2 = { font: "60px Arial", fill: "#000", align: "center" };
    var t = this.game.add.text(350, 300, text, style);
    var t2 = this.game.add.text(30, 670, text2, style2);
     button = game.add.button(1000, 1520, 'backbutton', actionOnClick2, this, 2, 1, 0);
        button.scale.setTo(0.8,0.8);
     sandboxbutton = game.add.button(100, 460, 'sandbox', actionOnClick3, this, 2, 1, 0);
     button1 = game.add.button(100, 760, '1button', actionOnClick4, this, 2, 1, 0);   
        button1.scale.setTo(0.33,0.33); 
         button2 = game.add.button(100, 960, '2button', actionOnClick5, this, 2, 1, 0);   
        button2.scale.setTo(0.415,0.277); 
//    button.onInputOver.add(over, this);
//    button.onInputOut.add(out, this);
//    button.onInputUp.add(up, this);
    function actionOnClick2 () {

    this.game.state.start("GameTitle");

}
    function actionOnClick3 () {

    this.game.state.start("Main");

}
function actionOnClick4 () {
        replays=3;
    this.game.state.start("Level1");

}
function actionOnClick5 () {
       replays=3;
    this.game.state.start("Level2");
        
}

        }
}
