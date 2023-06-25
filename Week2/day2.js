const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())


// Before any route handle called this middleware will be called to authenticate user .
//it allow us to do bunch of things before handler called.
function middleware1(req,res,next){
    console.log('from inside middleware '+ req.query.counter);
    next();
}
app.use(middleware1);

function calculateSum(counter) {
    var sum = 0;
    for (var i =1 ; i<=counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function calculateMul(counter) {
    var answer = 1;
    for (var i =1 ; i<=counter; i++) {
        answer = answer * i;
    }
    return answer;
}

function handleFirstRequest(req, res) {
    console.log(req.query);
    var counter = req.query.counter;
// if(counter<10000){

//     var calculatedSum = calculateSum(counter);
//     res.send('calculated Sum is '+ calculatedSum);
// }
// else{
//     res.status(411).send('you have sent very big number');
// }
var calculatedSum = calculateSum(counter);
    var calculatedMul = calculateMul(counter); 

    var answerObject = {
        sum: calculatedSum,
        mul: calculatedMul,
    };
//we mostly return body in json format because extracting value from it easy then text string

        res.send(answerObject);
}

function givePage(req, res) {
    res.send(`<head>
        <title>
            Hello from page
        </title>
    </head>
    <body>
        <i>hi there</i>
    </body>`)
   
}
function external(req,res){
    res.sendFile(__dirname + '/index.html'); //we can send text from another file too

}
app.get('/', givePage)
app.get('/external',external);


app.get('/handleSum', handleFirstRequest)


function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)