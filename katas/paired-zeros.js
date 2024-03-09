const pairZeros = (arr) => {
  let result = []
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++
      if (count === 2) {
        count = 0
        continue
      }
    }
    result.push(arr[i])
  }
  return result
}
