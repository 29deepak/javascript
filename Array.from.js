const a ="deepak"

let b=Array.from(a)
console.log(b)
let s=new Set([1,2,300])
console.log(s)
const d=[...s]
console.log(d)

const c=a.split("")
console.log(c)

const arr=[1,2,3,4]
const xyz =Array.from(arr,each=>each+2)
console.log(xyz) //output--[ 3, 4, 5, 6 ]

const yz = Array.from({length:5},(each,index)=>index*2)
console.log(yz) //output--[ 0, 2, 4, 6, 8 ]
