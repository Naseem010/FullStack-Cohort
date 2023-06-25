const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=3000;

app.use(bodyParser.json())

// function middleware1(req,res,next){
//     console.log("from inside the middleware" + req.headers.counter);
//     next();
// }

// app.use(middleware1);
function calculateSum(n){
    var Sum=0;
    for(let i=1;i<=n;i++){
        Sum+=i;
    }
    return Sum;
}
function calculateMul(n){
    let mul=1;
    for(let i=1;i<n;i++){
        mul*=i;
    }
    return mul;

}
function handleFirstRequest(req,res){
    // console.log(req.headers);
    // console.log(req.query);
    console.log(req.body);


    var counter=req.headers.Counter;
    var answerObject={
        Sum:calculateSum(counter),
        Mul:calculateMul(counter)
    }
    res.send(answerObject);
    // if(counter<100000){
    //     res.send('calculated Sum is '+ calculate(counter));

    // }else{
    //     res.status(411).send("you have sent very big number");
    // }
}
function givePage(req,res){
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello from page</title>
    </head>
    <body>
        <b>hi there!</b>
    </body>
    </html>`)
}

function faheem(req,res){
    res.send('Faheem keep grilling');
}
function modify(req,res){
    res.send('landing page');
}
function Delete(req,res){
    res.send('sum is deleted');
}
app.get('/Sum',handleFirstRequest);
app.get('/',givePage);


app.post('/faheem',faheem);
app.put('/',modify);
app.delete('/Sum',Delete);


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});