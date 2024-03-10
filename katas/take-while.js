const takeWhile = (arr, pred) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (!pred(arr[i])) {
      break
    }
    res.push(arr[i])
  }
  return res
}
