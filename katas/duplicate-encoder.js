function duplicateEncode(word) {
  const str = word.toLowerCase()
  const map = getHashMap(str)
  let left = '('
  let right = ')'
  let res = []

  for (const char of str) {
    if (map.get(char) > 1) {
      res.push(right)
    } else {
      res.push(left)
    }
  }

  return res.join('')
}

function getHashMap(word) {
  let map = new Map()
  for (const char of word) {
    map.set(char, map.get(char) + 1 || 1)
  }
  return map
}
// 133
