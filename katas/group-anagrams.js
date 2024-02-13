function groupAnagrams(words) {
  const map = new Map()

  for (const word of words) {
    const sortedWord = word.split('').sort().join('')
    console.log(sortedWord)
    if (map.has(sortedWord)) {
      const values = [...map.get(sortedWord), word]
      console.log(values)
      map.set(sortedWord, values)
    } else {
      map.set(sortedWord, [word])
    }
  }

  // your turn !
  return [...map.values()]
}

console.log(groupAnagrams(['rat', 'tar', 'star']))
