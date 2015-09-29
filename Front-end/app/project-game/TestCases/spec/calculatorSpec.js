describe("Add Number", function(){

	it("Should store the value all the time", function(){

		expect(Calculator.current).toBeDefined();
		expect(Calculator.current).toEqual(0);
	});

	it("Should add Numbers", function(){

		expect(Calculator.add(5)).toEqual(5);
		expect(Calculator.add(5)).toEqual(10);
	});
});
