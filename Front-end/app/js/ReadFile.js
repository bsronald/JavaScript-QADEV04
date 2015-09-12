/**
 * Created by ronaldbutron on 9/11/2015.
 */


var fs= require('fs');
var ReadFile=function()
{

}
ReadFile.prototype.readFile=function(data){
    var text1= fs.readFileSync(data);
    return text1;
}
ReadFile.prototype.readFileAsync= function(data)
{

    var txt= fs.readFile(data,function(err,data1)
    {
        if(err)
        {
            throw err;
        }
        var conten=data1;
        console.log(conten.toString());
    });
}
module.exports=ReadFile;