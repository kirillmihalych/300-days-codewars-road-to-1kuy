function createPhoneNumber(arr) {
  let str = arr.join('')
  str = str.replace(/\d\d\d/, `(${str.match(/\d\d\d/)}) `)
  str = str.replace(/ \d\d\d/, `${str.match(/ \d\d\d/)}-`)

  return str
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
