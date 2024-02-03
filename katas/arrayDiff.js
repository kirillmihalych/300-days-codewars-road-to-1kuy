function arrayDiff(a, b) {
  const result = []
  const set = new Set(b)

  for (let num of a) {
    if (!set.has(num)) {
      result.push(num)
    }
  }

  return result
}
