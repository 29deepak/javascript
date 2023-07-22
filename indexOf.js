const arr=[1,2,3,4,5,66,7,8,1,2,66]
//---------------------indexOf-------------------------------
//it is used for that index element is exists or not

// syntax----indexOf("search item",start)--
//if exists then it return that index
// if it find the existing value, there are more than they didn't check
// start---where from satrt to find that index

const b=arr.indexOf(66,2)
//66 is the number that finds and 2 is start from that index
console.log(b) //output-5


const c=arr.indexOf(1)
//by default it start from 0
console.log(c) ///output-0

const d=arr.indexOf(1,4)
console.log(d) //output-8

const e=arr.indexOf(200)
console.log(e) //doesnot exists it giv ethe value is -1
