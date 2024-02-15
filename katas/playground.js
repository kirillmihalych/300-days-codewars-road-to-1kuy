function digitalRoot(n) {
  // ...
  console.log(sum(n))
  function recursive(num) {
    console.log(num)
    let summary = sum(num)

    if (num.toString().length <= 1) {
      return summary
    }

    return recursive(summary)
  }

  return recursive(n)
}

function sum(num, sum = 0) {
  let s = num.toString().split('')
  for (let i = 0; i < s.length; i++) {
    sum += Number(s[i])
  }
  console.log(sum)
  return sum
}

// console.log(digitalRoot(456), 6)
// console.log(digitalRoot(16), 7)
console.log(digitalRoot(663274), 1)
