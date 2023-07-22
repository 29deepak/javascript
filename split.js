const name="deepak kumar is a good boy"
const a=name.split() //--return in the form of array
console.log(a)//output--[ 'deepak kumar' ]


const b=name.split("")
console.log(b) //--[
//   'd', 'e', 'e', 'p', 'a', 'k',
//   ' ', 'k', 'u', 'm', 'a', 'r',
//   ' ', 'i', 's', ' ', 'a', ' ',
//   'g', 'o', 'o', 'd', ' ', 'b',
//   'o', 'y'
// ]

const c=name.split(" ")
console.log(c) //[ 'deepak', 'kumar', 'is', 'a', 'good', 'boy' ]


const d=c.join(" ")
console.log(d) // deepak kumar is a good boy
