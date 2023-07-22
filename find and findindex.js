const arr=[1,2,3,45,6,34]
var b=arr.find(checkAdult)
console.log(b) //45

// --------it gives for one conditoion firstly they find the value they didn't go for others


function checkAdult(age){
    return age >=18
}

var c=arr.findIndex(checkAdult)
console.log(c) //loutput-3
