
var Game = function(name){
    this.name = name;

    var maxNumShots;
    this.players = [];

    this._createPlayers();

}

Game.prototype.start = function(){
    console.log(this.name,'game started');
    console.log('Here should start the game logic');

    do {
       
        var size = '4,4';
		var num = size.split(',');
    }while((num[0]*num[1])<8);

    this.players[0].createTable(num[0], num[1]);

    var numShots = 0;
    var maxShots = parseInt((num[0]*num[1])/3);

    console.log("You have ",maxShots," shots");

    do{
		var shotx = parseInt(Math.random() * 10);
		var shoty = parseInt(Math.random() * 10);
		
        var pos = this.players[0].table._doShot(shotx,shoty);

        if(pos == 1 || pos == 3)
            numShots++;

        if(pos == 2)
            console.log("Oops, you already hit that location");

        console.log("You still have ",maxShots-numShots," shots");
    }while(numShots < maxShots);

    console.log('The game finished');
    console.log('TMP: table', this.players[0].table._field);
	
	return numShots;
}

Game.prototype._createPlayers = function(){
    var numPlayers = 1;
    for(var i = 0; i < numPlayers; i++){
        var player = new Player('Player' + i);
        this.players.push(player);
    }
	return player;
}


//module.exports = Game;