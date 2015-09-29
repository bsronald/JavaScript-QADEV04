//var Table = require('./table.js')

var Player = function(name){
    this.name = name;
    this.score = 0; //todo
    this.numShots = 0; //todo
    this.table;
}

Player.prototype.createTable = function(number, number2)
{
    this.table = new Table(number, number2);
    return this.table.getField();
}

//module.exports = Player;