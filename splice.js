// topic is splice
// arr.splice(start_index, nof elements is deleted)--1st syntax
//splice is always return the array
//---------------------------------------------------------------
//  arr.splice("start_index",how many delete aftre that , push the element here how many you wnat)


const arr=[6,8,103,84,7,2,48,98]
// arr.splice(start_index, nof elements is deleted)
// arr.splice(1,1)-- from 1st index delete first element
// arr.splice(1,2)---from 1st index delete from index to two elements

const b=arr.splice(1,1)
console.log(b) // [ 8 ]  ---removed that elemnet
console.log(arr) //output --[6, 103, 84, 7,2,  48, 98]


let c=arr.splice(2,2)
console.log(c)//[ 84, 7 ] ---removed two elemets from index 2 to from that index to two elements

console.log(arr) //output ---[ 6, 103, 2, 48, 98 ]


let d= arr.splice(2,1,34,56,76)
//34,56,76----that are adding in a array
console.log(d)//output--[ 2 ]
console.log(arr) //output-[6, 103, 34, 56,76,  48, 98]
