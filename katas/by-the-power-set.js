function power(array) {
  array.sort((a, b) => a - b)
  return doDfs(array)
}

function doDfs(arr, level = 0, subset = [], powerset = []) {
  powerset.push(subset.slice(''))

  for (let i = level; i < arr.length; i++) {
    doBackTracking(arr, i, subset, powerset)
  }

  return powerset
}

function doBackTracking(arr, level, subset, powerset) {
  subset.push(arr[level])
  doDfs(arr, level + 1, subset, powerset)
  subset.pop()
}

console.log(power([1, 2, 3]))
console.log(power(['a', 'b']))
