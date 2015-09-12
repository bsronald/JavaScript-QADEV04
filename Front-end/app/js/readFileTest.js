/**
 * Created by ronaldbutron on 9/11/2015.
 */
var ReadFile=require('./ReadFile.js');
var read= new ReadFile();
console.log('contend A:','\n',read.readFile('d:\\ROnald.txt').toString());
console.log('contend B:','\n');
read.readFileAsync('d:\\ROnald.txt');