const arr=[1,2,3,[1,2,[3,4,[4,5]]]]
const b=arr.flat()
console.log(b)
//output-[ 1, 2, 3, 1, 2, [ 3, 4, [ 4, 5 ] ] ]

const c=arr.flat("Infinity")
console.log(c)
// //[
//   1, 2, 3, 1, 2,
//   3, 4, 4, 5
// ]
