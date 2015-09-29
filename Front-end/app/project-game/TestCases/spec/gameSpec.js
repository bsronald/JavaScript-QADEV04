describe('Game', function(){
        it('Create a new player', function(){
            var game = new Game();
			//Steps
            var actRes = game._createPlayers();
            var expRes = new Player();
            //Validation
			expect(actRes).toBeDefined();
			expect(typeof(actRes)).toEqual(typeof(expRes));
        });
		
		it('Finished the game', function(){
            var game = new Game();
			//Steps
            var actRes = game.start();
            var expRes = parseInt((4*4)/3);
            //Validation
			expect(actRes).toEqual(expRes);
        });
});
