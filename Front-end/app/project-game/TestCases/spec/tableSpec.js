describe('Table', function(){
        it('Create new ships', function(){
            var table = new Table(4,4);
			//Steps
            var actRes = table._createShips();
            var expRes = parseInt((4*4)/20)+1;
            //Validation
			expect(actRes).toEqual(expRes);
        });
		
		it('Shot in the same place', function(){
            var table = new Table(4,4);
			//Steps
			table._createShips();
			table._initField();
			table._placeShips();
			table._doShot(1,1);
			var actRes = table._doShot(1,1);
            var expRes = 2;
            //Validation
			expect(actRes).toEqual(expRes);
        });
		
		it('Shot out of the Table', function(){
            var table = new Table(4,4);
			//Steps
			table._createShips();
			table._initField();
			table._placeShips();
			var actRes = table._doShot(4,5);
            var expRes = 0;
            //Validation
			expect(actRes).toEqual(expRes);
        });
		
		it('SHot on a Ship', function(){
            var table = new Table(4,4);
			//Steps
			table._createShips();
			table._initField();
			var placeShip = table._placeShips();
			var actRes = table._doShot(placeShip[0],placeShip[1]);
            var expRes = 1;
            //Validation
			expect(actRes).toEqual(expRes);
        });
		
		it('Failed Shot', function(){
            var table = new Table(4,4);
			//Steps
			table._createShips();
			table._initField();
			table._placeShips();
			var actRes = table._doShot(1,1);
            var expRes = 3;
            //Validation
			expect(actRes).toEqual(expRes);
        });
    });
