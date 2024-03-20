const arr = [1, 2, 3, 4, 10, 11, 12, 20, 21, 22]

function isEven(el) {
  console.log(el)
  return el % 2 === 0
}

function isGTten(el) {
  console.log(el)
  return el > 10
}

const multiFilter = (fns) => {
  if (!fns) return null
}

// const result = arr.filter((x) => isEven(x) && isGTten(x))
// console.log(result)

console.log(arr.filter(multiFilter()))
