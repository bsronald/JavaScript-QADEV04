

    describe('Player', function(){
        it('Create a table for the player', function(){
            var player = new Player();
			//Steps
            var actRes = player.createTable(4,4);
            var expRes = 4*4;
            //Validation
            expect(actRes).toEqual(expRes);
        });
    });

