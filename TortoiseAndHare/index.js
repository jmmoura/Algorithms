const findCycle = array => {
  
  let tortoise = array[0]
  let hare = array[0]
  do {
    tortoise = array[tortoise]
    hare = array[array[hare]]
  } while (tortoise != hare)

  let pointer1 = array[0]
  let pointer2 = tortoise
  while (pointer1 != pointer2) {
    pointer1 = array[pointer1]
    pointer2 = array[pointer2]
  }

  return  pointer1

}

console.log(findCycle([4, 2, 5, 1, 5, 6, 8, 7, 3]))