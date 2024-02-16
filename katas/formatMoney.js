// brute force
function formatMoney(amount) {
  // your formatting code here
  let s = amount.toString().split('.')
  console.log(s)
  let dollars = s[0]
  let cents = s[1]

  if (!cents) {
    cents = '00'
  } else if (cents.length < 2) {
    cents = `${cents}0`
  }

  let formated = `$${dollars}.${cents}`
  return formated
}

// toFixed()
function doFormatMoney(amount) {
  // your formatting code here
  return `$${amount.toFixed(2)}`
}

console.log(formatMoney(39.99))
console.log(formatMoney(3))
console.log(formatMoney(3.1))
