var Main = function(game){

};

Main.prototype = {

	create: function() {

		var me = this;

		me.game.stage.backgroundColor = "34495f";

		
		me.tileTypes = [
			'1', //blue
			'2',//green
			'3', //red
			'4',//yellow
			'5',//bblue
			'6',//bgreen
			'7', //bred
			'8'//byellow
			
		];

		
		me.score = 0;

		
		me.activeTile1 = null;
		me.activeTile2 = null;

		
		me.canMove = false;

		
		me.tileWidth =200 
		me.tileHeight =200 

		
		me.tiles = me.game.add.group();

		
		me.tileGrid = [
			[null, null, null, null,  null],
			[null, null, null, null,  null],
			[null, null, null, null,  null],
			[null, null, null, null,  null],
			[null, null, null, null,  null]
			
		];

		
		var seed = Date.now();
		me.random = new Phaser.RandomDataGenerator([seed]);
                           
		
		me.initTiles();
		me.createScore();

	},

	update: function() {

		var me = this;

		
		if(me.activeTile1 && !me.activeTile2){

			
			var hoverX = me.game.input.x;
			var hoverY = me.game.input.y;

			
			var hoverPosX = Math.floor(hoverX/me.tileWidth);
			var hoverPosY = Math.floor(hoverY/me.tileHeight);

			
			var difX = (hoverPosX - me.startPosX);
			var difY = (hoverPosY - me.startPosY);

			
			if(!(hoverPosY > me.tileGrid[0].length - 1 || hoverPosY < 0) && !(hoverPosX > me.tileGrid.length - 1 || hoverPosX < 0)){

				
				if((Math.abs(difY) == 1 && difX == 0) || (Math.abs(difX) == 1 && difY ==0)){

					
					me.canMove = false;

					
					me.activeTile2 = me.tileGrid[hoverPosX][hoverPosY];

					
					me.swapTiles();

					
					me.game.time.events.add(300, function(){
						me.checkMatch();
					});
				}

			}

		}

	},

	
	gameOver: function(){
		this.game.state.start('GameOver');
	},

	initTiles: function(){

		var me = this;

		
                console.log(me.tileGrid.length);
                console.log(me.tileGrid[1].length);
                console.log("me.tileGrid.length");
		for(var i = 0; i < me.tileGrid.length; i++){

			
			for(var j = 0; j < me.tileGrid.length; j++){

				
				var tile = me.addTile(i, j,0);

				
				me.tileGrid[i][j] = tile;

			}
		}

		
		me.game.time.events.add(300, function(){
			me.checkMatch();
		});

	},

	addTile: function(x, y, type){

		var me = this;

		
		if (type ==0){
		var tileToAdd = me.tileTypes[me.random.integerInRange(0, me.tileTypes.length - 5)];	
		}
		if (type ==5){
		var tileToAdd = me.tileTypes[4];	
		}
		if (type ==6){
		var tileToAdd = me.tileTypes[5];	
		}
		if (type ==7){
		var tileToAdd = me.tileTypes[6];	
		}
		if (type ==8){
		var tileToAdd = me.tileTypes[7];	
		}
		
		
		
		var tile = me.tiles.create((x * me.tileWidth) + me.tileWidth / 2, 0, tileToAdd);

		
		me.game.add.tween(tile).to({y:y*me.tileHeight+(me.tileHeight/2)}, 300, Phaser.Easing.Linear.In, true)


		tile.anchor.setTo(0.5, 0.5);

		
		tile.inputEnabled = true;

		
		tile.tileType = tileToAdd;

		
		tile.events.onInputDown.add(me.tileDown, me);

		return tile;

	},

	tileDown: function(tile, pointer){

		var me = this;

		
		if(me.canMove){
			me.activeTile1 = tile;

			me.startPosX = (tile.x - me.tileWidth/2) / me.tileWidth;
			me.startPosY = (tile.y - me.tileHeight/2) / me.tileHeight;
		}

	},

	tileUp: function(){

		
		var me = this;
		me.activeTile1 = null;
		me.activeTile2 = null;

	},

	swapTiles: function(){

		var me = this;

		
		if(me.activeTile1 && me.activeTile2){

			var tile1Pos = {x:(me.activeTile1.x - me.tileWidth / 2) / me.tileWidth, y:(me.activeTile1.y - me.tileHeight / 2) / me.tileHeight};
			var tile2Pos = {x:(me.activeTile2.x - me.tileWidth / 2) / me.tileWidth, y:(me.activeTile2.y - me.tileHeight / 2) / me.tileHeight};

			
			me.tileGrid[tile1Pos.x][tile1Pos.y] = me.activeTile2;
			me.tileGrid[tile2Pos.x][tile2Pos.y] = me.activeTile1;

			
			me.game.add.tween(me.activeTile1).to({x:tile2Pos.x * me.tileWidth + (me.tileWidth/2), y:tile2Pos.y * me.tileHeight + (me.tileHeight/2)}, 100, Phaser.Easing.Linear.In, true);
			me.game.add.tween(me.activeTile2).to({x:tile1Pos.x * me.tileWidth + (me.tileWidth/2), y:tile1Pos.y * me.tileHeight + (me.tileHeight/2)}, 100, Phaser.Easing.Linear.In, true);

			me.activeTile1 = me.tileGrid[tile1Pos.x][tile1Pos.y];
			me.activeTile2 = me.tileGrid[tile2Pos.x][tile2Pos.y];

		}

	},

	checkMatch: function(){

		var me = this;

		
		var matches = me.getMatches(me.tileGrid);
                console.log(matches);
                if(matches.length > 0){
                console.log(matches[0].length);
                }
		
		if(matches.length > 0){

			
			me.removeTileGroup(matches);

			
			me.resetTile();
			
			
			me.fillTile(matches.length);

			
			me.game.time.events.add(300, function(){
				me.tileUp();
			});

			
			me.game.time.events.add(300, function(){
				me.checkMatch();
			});

		}
		else {

			
			me.swapTiles();
			me.game.time.events.add(300, function(){
				me.tileUp();
				me.canMove = true;
			});
		}

	},

	getMatches: function(tileGrid){

		var matches = [];
		var groups = [];

		
		for (var i = 0; i < tileGrid.length; i++)
		{
			var tempArr = tileGrid[i];
			groups = [];
			for (var j = 0; j < tempArr.length; j++)
			{
				if(j < tempArr.length - 2)
					if (tileGrid[i][j] && tileGrid[i][j + 1] && tileGrid[i][j + 2])
					{
						if ((Number(tileGrid[i][j].tileType) == Number(tileGrid[i][j+1].tileType) && Number(tileGrid[i][j+1].tileType) == Number(tileGrid[i][j+2].tileType)) || (Number(tileGrid[i][j].tileType) == Number(tileGrid[i][j+1].tileType)+4 && Number(tileGrid[i][j+1].tileType) == Number(tileGrid[i][j+2].tileType)) || (Number(tileGrid[i][j].tileType) == Number(tileGrid[i][j+1].tileType)+4 && Number(tileGrid[i][j+1].tileType) == Number(tileGrid[i][j+2].tileType)-4) || (Number(tileGrid[i][j].tileType) == Number(tileGrid[i][j+1].tileType) && Number(tileGrid[i][j+1].tileType) == Number(tileGrid[i][j+2].tileType)+4) || (Number(tileGrid[i][j].tileType) == Number(tileGrid[i][j+1].tileType)-4 && Number(tileGrid[i][j+1].tileType) == Number(tileGrid[i][j+2].tileType)) ||(Number(tileGrid[i][j].tileType) == Number(tileGrid[i][j+1].tileType)-4 && Number(tileGrid[i][j+1].tileType) == Number(tileGrid[i][j+2].tileType)+4) || (Number(tileGrid[i][j].tileType) == Number(tileGrid[i][j+1].tileType) && Number(tileGrid[i][j+1].tileType) == Number(tileGrid[i][j+2].tileType)-4) )
						{
							if (groups.length > 0)
							{
								if (groups.indexOf(tileGrid[i][j]) == -1)
								{
									matches.push(groups);
									groups = [];
								}
							}

							if (groups.indexOf(tileGrid[i][j]) == -1)
							{
								groups.push(tileGrid[i][j]);
							}
							if (groups.indexOf(tileGrid[i][j+1]) == -1)
							{
								groups.push(tileGrid[i][j+1]);
							}
							if (groups.indexOf(tileGrid[i][j+2]) == -1)
							{
								groups.push(tileGrid[i][j+2]);
							}
						}
					}
			}
			if(groups.length > 0) matches.push(groups);
		}

		
		for (j = 0; j < tileGrid.length; j++)
		{
			var tempArr = tileGrid[j];
			groups = [];
			for (i = 0; i < tempArr.length; i++)
			{
				if(i < tempArr.length - 2)
					if (tileGrid[i][j] && tileGrid[i+1][j] && tileGrid[i+2][j])
					{
						if ((Number(tileGrid[i][j].tileType) == Number(tileGrid[i+1][j].tileType) && Number(tileGrid[i+1][j].tileType) == Number(tileGrid[i+2][j].tileType)) || (Number(tileGrid[i][j].tileType) == Number(tileGrid[i+1][j].tileType)+4 && Number(tileGrid[i+1][j].tileType) == Number(tileGrid[i+2][j].tileType)) || (Number(tileGrid[i][j].tileType) == Number(tileGrid[i+1][j].tileType)+4 && Number(tileGrid[i+1][j].tileType) == Number(tileGrid[i+2][j].tileType)-4) || (Number(tileGrid[i][j].tileType) == Number(tileGrid[i+1][j].tileType) && Number(tileGrid[i+1][j].tileType) == Number(tileGrid[i+2][j].tileType)+4) || (Number(tileGrid[i][j].tileType) == Number(tileGrid[i+1][j].tileType)-4 && Number(tileGrid[i+1][j].tileType) == Number(tileGrid[i+2][j].tileType)) ||(Number(tileGrid[i][j].tileType) == Number(tileGrid[i+1][j].tileType)-4 && Number(tileGrid[i+1][j].tileType) == Number(tileGrid[i+2][j].tileType)+4) || (Number(tileGrid[i][j].tileType) == Number(tileGrid[i+1][j].tileType) && Number(tileGrid[i+1][j].tileType) == Number(tileGrid[i+2][j].tileType)-4) )
						{
							if (groups.length > 0)
							{
								if (groups.indexOf(tileGrid[i][j]) == -1)
								{
									matches.push(groups);
									groups = [];
								}
							}

							if (groups.indexOf(tileGrid[i][j]) == -1)
							{
								groups.push(tileGrid[i][j]);
							}
							if (groups.indexOf(tileGrid[i+1][j]) == -1)
							{
								groups.push(tileGrid[i+1][j]);
							}
							if (groups.indexOf(tileGrid[i+2][j]) == -1)
							{
								groups.push(tileGrid[i+2][j]);
							}
						}
					}
			}
			if(groups.length > 0) matches.push(groups);
		}

		return matches;

	},


	removeTileGroup: function(matches){
		
		var me = this;

		
		for(var i = 0; i < matches.length; i++){
			var tempArr = matches[i];
                        var tile = tempArr[0];
                            var tilePos = me.getTilePos(me.tileGrid, tile);
			for(var j = 0; j < tempArr.length; j++){

				var tile = tempArr[j];
				
				var tilePos = me.getTilePos(me.tileGrid, tile);

				
				me.tiles.remove(tile);
                            
				

				
				if(tilePos.x != -1 && tilePos.y != -1){
					me.tileGrid[tilePos.x][tilePos.y] = null;
				}
				
			}
                        
                        
            me.incrementScore(tempArr);
            if (tempArr.length > 3) {
            var ax=-1;
            var ay=-1;
            for (var k = 0; k < tempArr.length; k++){
                var tile3 = tempArr[k];
                
                var tilePos3 = me.getTilePos(me.tileGrid, tile3);
                var atilePos1 = me.getTilePos(me.tileGrid, me.activeTile1);
                var atilePos2 = me.getTilePos(me.tileGrid, me.activeTile2);
                console.log("active1");
                console.log(atilePos1.x);
                console.log(atilePos1.y);
                console.log("tilepos3");
                console.log(tilePos3.x);
                console.log(tilePos3.y);
             
                if (tilePos3.x==atilePos1.x && tilePos3.y==atilePos1.y){
                    ax=atilePos1.x;
                    ay=atilePos1.y;
                }
                if (tilePos3.x==atilePos2.x && tilePos3.y==atilePos2.y){
                   ax=atilePos2.x;
                    ay=atilePos2.y; 
                }
            }
                console.log("ax");
                console.log(ax);
                console.log("ay");
                console.log(ax);
                console.log(tilePos.x);
                console.log(tilePos.y);
                console.log(4+Number(tempArr[0].tileType));
                var type = 0;
                if (tempArr[0].tileType == 1) {
                    type=5;
                }
                if (tempArr[0].tileType == 2) {
                    type=6;
                }
                if (tempArr[0].tileType == 3) {
                    type=7;
                }
                if (tempArr[0].tileType == 4) {
                    type=8;
                }
                if (ax!=-1 && ay!=-1){
                var tile2 = me.addTile(ax, ay, type);
                me.tileGrid[ax][ay] = tile2;
            }
            var tile2 = me.addTile(tilePos.x, tilePos.y, type);
                me.tileGrid[tilePos.x][tilePos.y] = tile2;
            }
        }
    },

	getTilePos: function(tileGrid, tile)
	{
		var pos = {x:-1, y:-1};

		
		for(var i = 0; i < tileGrid.length ; i++)
		{
			for(var j = 0; j < tileGrid[i].length; j++)
			{
				
				if(tile == tileGrid[i][j])
				{
					pos.x = i;
					pos.y = j;
					break;
				}
			}
		}

		return pos;
	},

	resetTile: function(){

		var me = this;

		
		for (var i = 0; i < me.tileGrid.length; i++)
		{

			
			for (var j = me.tileGrid[i].length - 1; j > 0; j--)
			{

				
				if(me.tileGrid[i][j] == null && me.tileGrid[i][j-1] != null)
				{
					
					var tempTile = me.tileGrid[i][j-1];
					me.tileGrid[i][j] = tempTile;
					me.tileGrid[i][j-1] = null;

					me.game.add.tween(tempTile).to({y:(me.tileHeight*j)+(me.tileHeight/2)}, 100, Phaser.Easing.Linear.In, true);

					
					j = me.tileGrid[i].length;
				}
			}
		}

	},

	fillTile: function(color){

		var me = this;

		
		for(var i = 0; i < me.tileGrid.length; i++){

			for(var j = 0; j < me.tileGrid.length; j++){

				if (me.tileGrid[i][j] == null)
				{
					
					
					var tile = me.addTile(i, j,0);

					
					me.tileGrid[i][j] = tile;
				}

			}
		}

	},

	createScore: function(){

		var me = this;
		var scoreFont = "100px Arial";

		me.scoreLabel = me.game.add.text((Math.floor(me.tileGrid[0].length / 2) * me.tileWidth), me.tileGrid.length * me.tileHeight, "0", {font: scoreFont, fill: "#fff"}); 
		me.scoreLabel.anchor.setTo(0.5, 0);
		me.scoreLabel.align = 'center';

	},

	incrementScore: function(tempArr){

		var me = this;
                if (tempArr.length==3){
		me.score += 1;
            }
              if (tempArr.length==4){
		me.score += 5;
            }
              if (tempArr.length==5){
		me.score += 25;
            }
		me.scoreLabel.text = me.score; 		

	},

};