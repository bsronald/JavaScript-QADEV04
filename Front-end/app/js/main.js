/**
 * Created by RonaldButron on 8/10/2015.
 */
console.log("This is a JS code from a JS File");
var sayHello=function(hello){
   var helloStr='Ronald'+hello;
    console.log(helloStr);
};

sayHello();

var Person=function(name, age){
    this.name=name;
    this.age=age;
    this.sayhello=function(name1){
        console.log(arguments);
        console.log('Hola',name1,' my name is', this.name);//, this.name);
    };
};
var paco = new Person('Paco', 12);
var hugo = new Person('Hugo',15);

var age ='';
function calculateAge(bornYear){
    var age=2015-bornYear;
    return age;
}
//var age1 ='';
function calculateAge1(bornYear){
    age1=2015-bornYear;
    return age1;
}
var Calculator=function(){
    this.calculateOperation=function() {

        //var numbers=arguments;
        //console.log('CalculatorOperations', arguments,numbers);

        if(arguments.length==0){
            throw "Cannot do the evaluation without params"
        }
        console.log('The max is ', this.getMax(arguments));
        console.log('The sum is ', this.getSum(arguments));
    };
    /**
     *
     * @param numbers
     * @param pos
     * @returns {*}
     */
    this.getSum=function(numbers, pos){
        if(pos===undefined){
            pos=numbers.length-1;
        }
        //var currentVal=numbers[pos];
        if(pos==0)
        return numbers[pos];
        else
        return numbers[pos]+this.getSum(numbers, pos-1);
    };
    this.getMax=function(numbers,pos,max){
        var max;
        if(pos===undefined){
            pos=numbers.length-1;
        }
        if(max===undefined ||numbers[pos]>max ){
            max=numbers[pos];
        }
        if(pos==0) {
            return max;
        }
        else{
            return this.getMax(numbers,pos-1, max);
        }
    };


};
var Calcu=new Calculator();




