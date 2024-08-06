// var, let  e const
var x=10;
var y=15;

if (y >10){
    var x =5;
    console.log(x);
}

console.log(x);

let a =10;
let b =15;

if (b >10){
    let a =5;
    console.log(a);
}

console.log(a);

function logName(){
    const name = "Gabriel";
    console.log(name);
}

const name ="Beatriz";

logName();

console.log(name);

//  arroy  function //
const sum =function (a,b){
    return a+ b
}

const arroySum= (a, b) => a+ b;

console.log(sum (5 ,5));

console.log(arroySum(5 ,5));