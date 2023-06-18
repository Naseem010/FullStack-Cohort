const express=require('express');
const app=express();
const port=3000;

function calculate(n){
    var Sum=0;
    for(let i=1;i<=n;i++){
        Sum+=i;
    }
    return Sum;
}
function handleFirstRequest(req,res){
    var counter=req.query.counter;
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
app.get('/Sum',handleFirstRequest);

app.post('/faheem',faheem);
app.put('/',modify);
app.delete('/Sum',Delete);


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});