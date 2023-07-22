const arr=[1,2,3,4,5,66,7,8,1,2,66]
//---------------------lastIndexOf-------------------------------

// it checking the values from the last it is exists or not
//searching start from the last
const b=arr.lastIndexOf(1,3)
console.log(b) //output---0---bcz checking the values from index 3 to 0.
//doesnot exists it return -1

const c=arr.lastIndexOf(7)
console.log(c) --//ouutput---6
