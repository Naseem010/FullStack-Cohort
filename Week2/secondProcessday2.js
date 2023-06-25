// We can fectch body data using this method

function logResponsebody(jsonBody){
    console.log(jsonBody);
}

function callbackfn(result){
   result.json().then(logResponsebody);
}

var sendObj={
    method:'GET'
}

fetch("http://localhost:3000/handleSum?counter=10",sendObj).then(callbackfn);

// Using Below Method it print all response but using above method we can extract body data

// var sendObj={
//     method:'GET' 
// }
// function callbackfn(result){
//     console.log(result);
//  }
// fetch("http://localhost:3000/handleSum?counter=10",sendObj).then(callbackfn);

