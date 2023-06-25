const express=require('express');
const app=express();
const port=3000;

// Before any route handle called this middleware will be called to authenticate user .
//it allow us to do bunch of things before handler called.
function middleware1(req,res,next){
    console.log('from inside middleware '+ req.headers.counter);
    next();
}
app.use(middleware1);

function calculate(n){
    var Sum=0;
    for(let i=1;i<=n;i++){
        Sum+=i;
    }
    return Sum;
}
function handleFirstRequest(req,res){
    // var counter=req.query.counter;
    console.log(req.body);
    // var counter=req.headers.counter;
    var counter=req.body.counter;


    res.send('calculated Sum is '+ calculate(counter));
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
app.get('/handleSum',handleFirstRequest);

app.post('/faheem',faheem);
app.put('/',modify);
app.delete('/Sum',Delete);


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});