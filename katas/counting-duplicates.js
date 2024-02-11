function duplicateCount(text) {
  //...
  const map = getMap(text.toLowerCase())

  let count = 0
  for (const [key, value] of map) {
    if (value > 1) count++
  }

  return count
}

function getMap(str, map = new Map()) {
  for (const char of str) {
    map.set(char, map.get(char) + 1 || 1)
  }
  return map
}

console.log(duplicateCount('Indivisibility'))
