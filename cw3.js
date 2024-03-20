//usuwanie plikow
var fs = require('fs');
fs.unlink('./test.txt',function(error,odczytaj){
    if(error){
        console.log(error);
    }
})