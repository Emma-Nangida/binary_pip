// Given unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]
function mergesort(arr){
    if(arr.length<=1)
    return arr

    let middle=Math.floor(arr.length/2)
    let left=arr.slice(0,middle)
    let right=arr.slice(middle)
    return sortedArr(mergesort(left),mergesort(right))
    
}
function sortedArr(left,right){
   let empty=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            empty.push(left.shift())
            
        }
        else{
            empty.push(right.shift())
        }
    }
    return[...empty,...left,...right]

}
let arr=[123,89,5,23,9,56]
console.log(mergesort(arr).reverse())


//Write a function mergeSort(arr) that takes an array arr and returns a new sorted
 //array using mergesort algorithm.
 function arrMerge(array){
    if(array.length<=1)
    return array
    let middle=Math.floor(array.length/2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)
    return sortedArray(arrMerge(left),arrMerge(right))
 }
 function sortedArray(left,right){
    let emptyArray=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift())

        }

    }
    return [...emptyArray,...left,...right]
 }
 let array=[2,4,3,7,8,10,12,16]
 console.log(arrMerge(array))

//   Implement a merge sort function that takes an array of strings
// //    as input and returns a sorted array in alphabetical order.

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}
const myArray = ["apple","banana","pear","orange"];
const sortedArray1 = mergeSort(myArray);
console.log(sortedArray1);

 //Implement a merge sort function that takes an array of integers as input and returns 
 //the median value (the middle value if the array is sorted).
function mergeSort2(arrInt){
if(arrInt.length<=1)
return arrInt
let middle=Math.floor(arrInt.length/2)
let left=arrInt.slice(0,middle)
let right=arrInt.slice(middle)
return sortedArray2(mergeSort2(left),mergeSort2(right))


}
function sortedArray2(left,right){
    let empty=[]
while(left.length && right.length){
    if(left[0]<=right[0]){
        empty.push(left.shift())
    }
    else{
        empty.push(right.shift()) 
    }
}
return[...empty,...left,...right]
}
let arrInt=[12,2,4,10,18,20,30,16]
let sorted=mergeSort2(arrInt)
console.log(sorted)



