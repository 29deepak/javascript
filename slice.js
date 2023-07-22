///topic is slice
// slice is always return array

const arr=[1,2,3,4,5]
// first of all ---if i iterate all the elements in the array we start withn index 0.

let b=arr.slice(0)
console.log(b) //output--[ 1, 2, 3, 4, 5 ]


// suppose if i wnat from index 2 all the elements
// if i start with index 2 to till last element it iterate the values
let c=arr.slice(2)
console.log(c) //output-[ 3, 4, 5 ]


// suppose if i want between the index of the values then
// we should do one thing take two paremeter in slice in that last element is excluded

let d= arr.slice(1,3)
console.log(d) //output-[ 2, 3 ]
