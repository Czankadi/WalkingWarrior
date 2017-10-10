var Description = function(game){};

Description.prototype = {

	create: function(){
            var me =this;
             background = game.add.tileSprite(0, 0, 1400, 1920, "background");
            var text1 = "1. Create matches of 3 cells to get points";
    var style = { font: "70px Arial", fill: "#000", align: "center" };
    var t1 = this.game.add.text(50, 80, text1, style);
    
                var text2 = "2. Create matches of 4 cells. ";
  
    var t2 = this.game.add.text(50, 160, text2, style);
    
                var text3 = "to make a bonus cell and more points.";
  
    var t3 = this.game.add.text(140, 240, text3, style);
    
                var text4 = "3. Create matches containing a bonus cell ";
  
    var t4 = this.game.add.text(50, 320, text4, style);
    
                var text5 = "to get extra moves.";
 
    var t5 = this.game.add.text(140, 400, text5, style);
    
                var text6 = "4. Create matches in the shape of a T or L";
  
    var t6 = this.game.add.text(50, 480, text6, style);
    
                var text7 = " to get potassium or magnesium";
 
    var t7 = this.game.add.text(140, 560, text7, style);
    
     var text8 = "5. Click potassium when you want to ";
 
    var t8 = this.game.add.text(50, 640, text8, style);
    
     var text9 = "clear a row of cells";
 
    var t9 = this.game.add.text(140, 720, text9, style);
    
     var text10 = "6. Click magnesium when you want to ";
 
    var t10 = this.game.add.text(50, 800, text10, style);
    
     var text11 = "clear a column of cells";
 
    var t11 = this.game.add.text(140, 880, text11, style);
    
     var text12 = "7. Click the switch button to switch two cells";
 
    var t12 = this.game.add.text(50, 960, text12, style);
    
      var text13 = "(this costs 3 moves)";
 
    var t13 = this.game.add.text(140, 1040, text13, style);
    
      var text14 = "8. Click the X button to erase a cell";
 
    var t14 = this.game.add.text(50, 1120, text14, style);
    
      var text15 = "(this costs 2 moves)";
 
    var t15 = this.game.add.text(140, 1200, text15, style);
    
      var text16 = "9. After level 5, you must walk 500 steps";
 
    var t16 = this.game.add.text(50, 1280, text16, style);
    
            var text17 = "to progress to the next level";
 
    var t17 = this.game.add.text(140, 1360, text17, style);
    
    
    
    
    button = game.add.button(1000, 1520, 'backbutton', actionOnClick2, this, 2, 1, 0);
        button.scale.setTo(0.8,0.8);
     
    function actionOnClick2 () {

    this.game.state.start("GameTitle");

}
 

        }
}
