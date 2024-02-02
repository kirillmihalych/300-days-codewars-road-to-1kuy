function group(arr) {
  const map = new Map()

  for (const num of arr) {
    if (map.has(num)) {
      map.get(num).push(num)
    } else {
      map.set(num, [num])
    }
  }

  return [...map.values()]
}
