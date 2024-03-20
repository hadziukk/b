//renme
var fs = require('fs');
fs.rename('./test.txt','./nowyPlik.html',function(error){
        console.log(error);
})