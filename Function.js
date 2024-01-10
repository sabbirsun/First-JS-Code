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

function myInfo(YourName, Village, PhoneNumber){
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
    newObj2.showMe();