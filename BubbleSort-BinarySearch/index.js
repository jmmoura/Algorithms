const bubbleSort = require('./bubbleSort')
const binarySearch = require('./binarySearch')

const arr = [2, 5, 8, 10, 6, 9, 15, 18, 20]

console.log(arr)

const sortedArray = bubbleSort(arr)

console.log(sortedArray)

const index = binarySearch(8, sortedArray)

console.log(index)