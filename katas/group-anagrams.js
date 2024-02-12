function groupAnagrams(words) {
  const res = []
  const map = new Map()

  for (const word of words) {
    const sortedWord = word.split('').sort().join('')
    if (map.has(sortedWord)) {
      const values = [...map.get(sortedWord), word]
      console.log(values)
      map.set(sortedWord, values)
    } else {
      map.set(sortedWord, [word])
    }
  }

  // for (const [word, wordCount] of map) {
  //   for (let i = 0; i < wordCount; i++) {}
  //   console.log(word, wordCount)
  // }
  console.log(map.get('art'))
  // your turn !
  return [words]
}

console.log(groupAnagrams(['rat', 'tar', 'star']))
