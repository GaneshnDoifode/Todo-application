const express = require('express')
const fs = require('fs')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

let arr = [];

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/todo',(req,res)=>{
    res.send(arr);
})

app.post('/removeTodo',(req,res)=>{
    const index = req.body.remove - 1;
    arr[index] = '';
    res.redirect('/');
})

app.post('/',(req,res)=>{
    const content = req.body.todo;
    arr.push(content);
    console.log(arr);
    let data = arr.toString();
    fs.writeFile('public/a.txt',data,'utf-8',(err)=>{
        if(err) {
            console.log(err);
        }
    })
    res.redirect('/');
})


module.exports= arr;

app.listen(3000);

