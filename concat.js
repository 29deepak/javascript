const arr=[10,20,30,40,50]
const arr1=[10,20,100,200]

const arr2=arr.concat(arr1)
console.log(arr2)



const arr3=new Set(arr2)
console.log(arr3) //Set(7) { 10, 20, 30, 40, 50, 100, 200 }

const arr4=[...new Set(arr2)]
console.log(arr4) //[
//   10,  20,  30, 40,
//   50, 100, 200
// ]
