function moveZeros(arr) {
  const zeros = []
  const chars = []

  for (const char of arr) {
    if (char === 0) {
      zeros.push(char)
    } else {
      chars.push(char)
    }
  }

  return chars.concat(zeros)
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))
