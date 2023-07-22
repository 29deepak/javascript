const arr=[1,2,3,4]
const b=Array.isArray(arr)
console.log(b) //true

const s1="deepak"
const c= Array.isArray(s1)
console.log(c) //false


console.log(...Array(10).keys()) //0 1 2 3 4 5 6 7 8 9


console.log([...Array(10).keys()])
//output--[
//   0, 1, 2, 3, 4,
//   5, 6, 7, 8, 9
// ]
