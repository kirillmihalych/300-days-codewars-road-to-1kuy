function findOdd(A) {
  //happy coding!
  const map = getMap(A)
  for (let [key, value] of map) {
    if (value % 2 !== 0) return key
  }
}

function getMap(nums) {
  let map = new Map()
  for (let num of nums) {
    map.set(num, map.get(num) + 1 || 1)
  }
  return map
}
