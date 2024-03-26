//usuwanie katalogu
var fs = require('fs');
var readable = fs.createReadSream('./data.txt',{encoding: 'utf8'});
var writable = fs.createWriteSream('./data_COPY.txt');

readable.on('data',function(porcja_danych){
    writable.write(porcja_danych);
})