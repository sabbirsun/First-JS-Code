// if else Statement
/*var a = 10;
var b = 10;

if(a < b){
    console.log("a boro");
}else if(a > b){
    console.log("b boro");
}else{
    console.log("They both are same");
}*/

// switch case Statement

/*var sum = 100;

switch(sum){
    case 10:
        console.log("Now, I am in 10");
        break;
    case 5:
        console.log("Now, I am in 10");
        break;
    case 1:
        console.log("Now, I am in 10");
        break;
    default:
        console.log("I don't msg");    
}*/

// Real time date

var myDate = new Date();

console.log(myDate.toTimeString());//Bangladesh Time
console.log(myDate.toLocaleTimeString());// AM PM show
console.log(myDate.toLocaleDateString());// Date show
console.log(myDate.getMonth());// Month
console.log(myDate.getDate());// Today Date
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());