const isOdd = (x) => x % 2 !== 0
const isNumber = (x) => !isNaN(x)

const cubeOdd = (arr) => arr.reduce((sum, num) => {
  console.log(arr)
  if(isNaN(num) || isNaN(sum)){
    return undefined
  }
  return isOdd(num) ? sum += Math.pow(num, 3) : sum
}, 0)