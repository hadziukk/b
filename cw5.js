//usuwanie katalogu
var fs = require('fs');
fs.rmdir('./przyklady',function(error){
    if(error){
        console.log(error);
    }else{
        console.log('usun');
    }

    })