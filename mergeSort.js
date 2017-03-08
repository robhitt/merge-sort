function mergeSort(arr){
  if (arr.length < 2) return arr

  var middle = Math.floor(arr.length / 2)
  var leftArray = arr.slice(0, middle)
  var rightArray = arr.slice(middle, arr.length)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

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

console.log("Sorted Array: [" + mergeSort([14, 4, 6, 3, 12, 11, 8, 1]) + "]")
