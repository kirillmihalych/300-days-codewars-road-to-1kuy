function isPangram(string) {
  //...
  return new Set(string).size > 25
}

console.log(isPangram('abcdefghijklmopqrstuvwxyz'))
