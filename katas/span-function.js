const span = (arr, predicate) => {
  let predicated = []
  let rest = []
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      predicated.push(arr[i])
    } else {
      rest = [...arr.slice(i, arr.length)]
      break
    }
  }
  return [predicated, rest]
}
