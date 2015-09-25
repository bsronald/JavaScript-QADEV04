/**
 * Created by RonaldButron on 8/14/2015.
 */


var Calculator=function(){
    this.calculateOperation=function() {

       if(arguments.length==0) {
            throw 'Cannot do the evaluation without params';
       }
        console.log('The max is ', this.getMax(arguments));
        console.log('The sum is ', this.getSum(arguments));
        console.log('The min is ', this.getMin(arguments));
        console.log('The AVG is ', this.getAvg(arguments));
    };
    /**
     *Get the sum of a array the numbers
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
    /**
     * Get the max number of the array of numbers
     * @param numbers
     * @param pos
     * @returns {*}
     */
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
    /**
     *Get the minimum number of an array
     * @param numbers
     * @param pos
     * @returns {*}
     */
    this.getMin=function(numbers,pos,min){
        var min;
        if(pos===undefined){
            pos=numbers.length-1;
        }
        if(min===undefined ||numbers[pos]<min){
            min=numbers[pos];
        }
        if(pos==0) {
            return min;
        }
        else{
            return this.getMin(numbers,pos-1, min);
        }
    };
    /**
     *Get the avg of array of numbers.
     * @param numbers
     * @param pos
     * @returns {*}
     */
    this.getAvg=function(numbers){
        size=numbers.length;
       avg=this.getSum(numbers)/size;
        return avg;
    };


};
var Calcu=new Calculator();

/**
 * Generate odd and even numbers.
 * @param numbers
 * @param pos
 * @returns {*}
 */
var getOddAndEventNumber=function(number){
    if(arguments.length==0) {
        throw 'Cannot do the evaluation without params';
    }

    var count=1;
    var res='Even Number: ';
    var res1='Odd Number: '
    while(count<=number*2)
    {
        if(count%2==0){
           res+=count+',';
        }
        else
        {
            res1+=count+',';
        }
        count++;
    }

    return console.log(res1+' '+res);

};



