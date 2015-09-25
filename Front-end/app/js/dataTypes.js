/**
 * Created by RonaldButron on 8/20/2015.
 */

var countWords=function(paragrah){
    var words=paragrah.split(' ');
    return words.length;
};
console.log("Number fo Words is ", countWords('Hello world'));

//var date = new Date(year, month, day, hours, minutes, seconds);

var printDate=function(){
        var date= new Date();
       // var currentDate=date.getDate();
    var days=['Sunday','Monday', 'Tuesday','Wednesday','Thursday', 'Friday','Saturday' ];

       // var currentTime='
        console.log('Today is: ', days[date.getDay()]);
       console.log('Current Time: ',date.getHours().toString(),'PM:',date.getMinutes().toString(), ':', date.getSeconds().toString());
    //console.log('Current time: ')
};

var getFirsCapicua=function(offset, limit)
{
    for(var i=offset; i<=limit; i++)
    {
        if(searchCapicua(i))
        {
            return i;
        }
    }
}

var searchCapicua=function(number){
     var reverse1= parseInt(number.toString().split('').reverse().join(''));
     return number==reverse1
   /* var res=number.toString();
    var words=res.split('');
    var res1=words.reverse();
    var res2=res1.join('');
    var reverse=new Number(res2);
    //console.log('It is :'+res1);
   if(number==reverse)
    {
        console.log('It is a Capiuca');
    }
   else
   {
       console.log('It is not a Capiuca')

   }*/
};

var reverseWord=function(s){
    var o=' ';
    for(var i= s.length-1; i>=0; i--)
    {
        o+=s[i];
    }
    return console.log(s+" inverted is: "+o)

}

var truncateWord=function(n, word){
    var count=0;
    var w='';
    while (count < word.length-1){

        if(count<n){
            w+=word[count];
        }
        count++;
    }
    return console.log('Truncate word: '+w);
}




