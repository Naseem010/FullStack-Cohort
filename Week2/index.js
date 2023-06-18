
const fs = require("fs");
const express = require('express')
const app = express();
const port = 3000;

function calculateSum(counter){
    let total = 0;
    for (let i = 0 ; i < counter ; i++){
        total = total + i;
    }
    return total;
}

function handleFirstRequest(req, res){
    var counter=req.query.counter; //query params
    let calculatedSum = calculateSum(counter);
    res.send("The sum is " + calculatedSum);
    // res.send("Hello world!");
}

function createUser(req,res){
    res.send("hello ");
}

app.get('/handleSum', handleFirstRequest);
app.post('/createUser',createUser);

function started(){
    console.log("Listening on port " + port);
    // console.log(`Listening on port ${port}`);
}


app.listen(port , started);
// function callbackFn(err, data){console.log(data)}

// fs.readFile("a.txt", "utf8", callbackFn)



// let calculatedSum = calculateSum(100);

// console.log(calculatedSum);