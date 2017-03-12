// The mergeSort function breaks down a single array into two smaller array elements unless it is a one element array.
// If the array is 1 element long then we return the array.
function mergeSort(arr){
  if (arr.length < 2) {
    console.log(arr)
    return arr
  }

  var middle = Math.floor(arr.length / 2)
  var leftArray = arr.slice(0, middle)
  var rightArray = arr.slice(middle, arr.length)
  console.log(leftArray)
  console.log(rightArray)
  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

// The merge function takes two arrays and stitches them together forming 1 new sorted array
function merge(leftArray, rightArray){
  var newArray = []

  while (leftArray.length > 0 && rightArray.length > 0){
    if (leftArray[0] <= rightArray[0]){
      newArray.push(leftArray.shift())
    } else {
      newArray.push(rightArray.shift())
    }
  }

  while (leftArray.length > 0){
    newArray.push(leftArray.shift())
  }

  while (rightArray.length > 0){
    newArray.push(rightArray.shift())
  }

  console.log(newArray) // Watch the order in the recursion play through
  return newArray
}

console.log("Sorted Array: [" + mergeSort([2, 5, 3]) + "]")
// Uncomment addtional arrays here to play around:
// console.log("Sorted Array: [" + mergeSort([2, 4, 1, 3]) + "]")
// console.log("Sorted Array: [" + mergeSort([8, 2, 12, 4, 1, 3]) + "]")
