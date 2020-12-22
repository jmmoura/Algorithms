const binarySearch = (value, arr) => {
  let leftPointer = 0
  let rigthPointer = arr.length - 1
  let index = 0

  while (rigthPointer - leftPointer != 1) {
    index = Math.round((leftPointer + rigthPointer) / 2)
    if (arr[index] === value) {
      return index
    }
    else if (arr[index] > value) {
      rigthPointer = index
    }
    else {
      leftPointer = index
    }
  }

  return 'The element "' + value + '" wasn\'t found in the array "[' + arr + ']"'

}

module.exports = binarySearch