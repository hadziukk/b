//usuwanie katalogu
var fs = require('fs');
fs.mkdir('./przyklady',function(error){
    if(error){
        console.log(error);
    }else{
        console.log('dodano');
    }

    })