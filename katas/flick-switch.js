function flickSwitch(arr) {
  const res = []
  let flag = true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'flick') flag = !flag
    if (flag) {
      res.push(true)
    } else {
      res.push(false)
    }
  }

  return res
}
