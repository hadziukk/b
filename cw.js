//odczyt z txt
var fs = require('fs');
fs.readFile('./test.txt','utf8',function(error,odczytaj){
    console.log(odczytaj);
})