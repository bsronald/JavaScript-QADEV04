/**
 * Created by RonaldButron on 8/24/2015.
 */
/**
 *
 * @param numA
 * @param numB
 * @param callBack
 * @returns {*}
 */


var doOperation=function(numA, numB, callback){
    callback();
    callback();
    callback();
    callback();

    return numA+numB;
};

var sayHello=function(){
    console.log('hello');
};
doOperation(1,2, function(){
    console.log('hello!');
});
(function(name){
    if(!name){
        name='world!'
    }
    console.log('hello '+name)
})('Pepe');

/**
 * Constructor Person class
 * @param name
 * @param age
 * @constructor
 */
var Person=function(name,age){
    this.name=name;
    var _age=age;

    this.printBio=function(){
      console.log('Hello my name is ',this.name, ' and I am ', _age, 'years old');
        _doSomethingPrivate()
    };

    this.getAge=function(){
        return _age;
    };

    var _doSomethingPrivate=function(){
        console.log('This is a private method');
    }

};

Person.sayHello=function(){
    console.log('Say Hello')
};

// Test Person class
var pepe=new Person('Ronald',20);
pepe.printBio();
//pepe. _doSomethingPrivate()//Error

Person.sayHello();

/*
sayHello();
 sayHello();
 sayHello();
 */
