//!important
/*function Fun(num){
    var total = num * 10;
    return total
    //console.log(total);
}
var a = Fun(10);
var b =Fun(20);
console.log(a + b);*/

// Object

/*function myInfo(YourName, Village, PhoneNumber){
    this.YourName = YourName;
    this.Village = Village;
    this.PhoneNumber = PhoneNumber;
    this.showMe = function(){
        console.log(this.YourName)
        console.log(this.Village)
        console.log(this.PhoneNumber)
    }
}
    var newObj = new myInfo("Sun", "Sirajganj", 017);
    var newObj2 = new myInfo("Sun", "Sirajganj", 017);
    newObj.showMe();
    console.log("break");
    newObj2.showMe();*/

// Ternary Operator

// var num = 5;
// var myCondition = (num < 10) ? "Ami tmr theke boro hote parlam na" : "Yes ami tmr theke boro hoye gechi";
// console.log(myCondition);

for(var i =0; i < 10; i++){
    if( i == 5){
        console.log("Break Now");
        break;
    }
    console.log(i);
}