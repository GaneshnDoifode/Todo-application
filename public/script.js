const fs = require('fs');

fs.readFile('a.txt','utf-8',(err,data)=>{
    document.querySelector('#para').innerHTML = data;
})