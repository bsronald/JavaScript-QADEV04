var Table = function(number, number2){
    this.size = number;
    this.sizev = number2;
    this.ships = [];
    this._field = new Array(number);
    for (i = 0; i < number; i++){
        this._field[i] = new Array(number2);
    }
	
	this.getField = function(){ 
		var count = 0;
		for(var i = 0; i < this.size ; i++)
		{
			for(var j = 0; j < this.sizev ; j++) {
				count++;
			}
		}
		return count;
	};
   //this._createShips();
   //this._initField();
   //this._placeShips();
}



Table.prototype._createShips = function(){

    var cont = this.size * this.sizev;
    var sizeS;
    var numShips = parseInt(cont/20)+1;
    for(var i = 0; i < numShips; i++){
        var rand = parseInt(Math.random() * 10);
        if(rand <= 3 && rand > 0)
            sizeS = 1;
        if(rand <= 6 && rand > 3)
            sizeS = 2;
        else
            sizeS = 3;
        var ship = new Ship(i, sizeS);
        this.ships.push(ship);
    }
	return this.ships.length;
}

Table.prototype._initField = function (){
    for(var i = 0; i < this.size ; i++)
    {
        for(var j = 0; j < this.sizev ; j++) {
            this._field[i][j] = '-';
        }
    }
}

Table.prototype._placeShips = function (){

	var place0 = 0;
	var place1 = 0;
    for (var j = 0; j < this.ships.length; j++) {
        var direction = parseInt(Math.random() * 10);
        var flag = 0;

        if(this.sizev > 3 && direction > 5 && flag != 1) {
                var ship = this.ships[j];

                do {
                    place0 = parseInt(Math.random() * 10);
                }while(place0>this.size);
                do {
                    place1 = parseInt(Math.random() * 10);
                }while(place1>=this.sizev-ship.size);

                for (var k = place1; k < (ship.size); k++) {
                    if(this._field[place0][k] === '-')
                        this._field[place0][k] = ship.id;
                    flag = 1;
                }
            }

        if(this.sizev > 3 && direction <= 5 && flag != 1) {
                var ship = this.ships[j];

                do {
                    place0 = parseInt(Math.random() * 10);
                }while(place0>this.size);
                do {
                    place1 = parseInt(Math.random() * 10);
                }while(place1>=this.sizev-ship.size);

                for (var k = place1; k < (ship.size); k++) {
                    if(this._field[place0][k] === '-')
                        this._field[place0][k] = ship.id;
                    flag = 1;
                }

        }

        if(this.size > 3 && direction > 5 && flag != 1) {
                var ship = this.ships[j];

                do {
                    place0 = parseInt(Math.random() * 10);
                }while(place0>=this.size-ship.size);
                do {
                    place1 = parseInt(Math.random() * 10);
                }while(place1>=this.sizev);

                for (var k = place0; k < (ship.size); k++) {
                    if(this._field[k][place1] === '-')
                        this._field[k][place1] = ship.id;
                        flag = 1;
                }

        }

        if(this.size > 3 && direction <= 5 && flag != 1) {
                var ship = this.ships[j];

                do {
                    place0 = parseInt(Math.random() * 10);
                }while(place0>=this.size-ship.size);
                do {
                    place1 = parseInt(Math.random() * 10);
                }while(place1>=this.sizev);

                for (var k = place0; k < (ship.size); k++) {
                    if(this._field[k][place1] === '-')
                        this._field[k][place1] = ship.id;
                        flag = 1;
                }
        }
    }
	var arr = [place0,place1];
	return arr;
}

Table.prototype._doShot = function(shotx,shoty){
    var i = shotx;
    var j = shoty;
    if(i<this.size && j<this.sizev) {
        if(this._field[i][j] == 'F' || this._field[i][j] == 'H')
            return 2;

        if (this._field[i][j] == '-') {
            this._field[i][j] = 'F';
            console.log("Shot failed");
			return 3;
        }
        else {
            var idShip = this._field[i][j];
            var kill = 0;
            this._field[i][j] = 'H';
            console.log("Good shot!!");

            for(var n = 0; n < this.size ; n++)
            {
                for(var m = 0; m < this.sizev ; m++) {
                    if(this._field[n][m] == idShip)
                        kill=1;
                }
            }

            if(kill == 0)
                console.log("Sunked ship number ", idShip, "!!");
			return 1;
        }
    }
    else {
        console.log('Invalid shot');
        return 0;
    }
}

