const swapValues = (i, j, arr) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  
  return arr
}

const generateCombinations = (index, arr) =>{
  if(index === 1){
    console.log(arr.join(''))
  }
  else{
    generateCombinations(index - 1, arr)

    const isEven = index % 2 === 0
    
    for(let i = 0; i < index - 1; i++){
      if(isEven){
        arr = swapValues(i, index - 1, arr)
      }
      else{
        arr = swapValues(0, index - 1, arr)
      }

      generateCombinations(index - 1, arr)
    }
  }
}

let word = 'ABCD'
let arr = word.split('')

generateCombinations(arr.length, arr)