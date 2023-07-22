///--------------some----------------------

var ages =[10,13,18,20]
// i wan to check that every is eaual to 18 or gretaer than 18
var b=ages.some(adultAge)
console.log(b) //--return true

function adultAge(age){
    return age>=18
}

//-------------------every------------------------------


// every value is greater than 18 or something

var c= ages.every(adultAge)
console.log(c) //false
