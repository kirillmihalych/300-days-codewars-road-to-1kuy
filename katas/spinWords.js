function spinWords(string) {
  //TODO Have fun :)
  return string
    .split(' ')
    .map((word) => {
      if (word.length >= 5) {
        word = word.split('').reverse('').join('')
      }
      return word
    })
    .join(' ')
}

console.log(spinWords('Hey fellow warriors'))
