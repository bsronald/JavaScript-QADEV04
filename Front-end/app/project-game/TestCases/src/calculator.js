/*var calculator=function(){

	return 5;
};
*/
window.Calculator={
	current:0,

	add:function(number){
		this.current+=number;
		return this.current;
	}
};


