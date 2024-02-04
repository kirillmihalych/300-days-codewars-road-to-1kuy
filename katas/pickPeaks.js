function pickPeaks(arr) {
  const res = { pos: [], peaks: [] }
  let position = -1

  for (let i = 1; i < arr.length; i++) {
    let [prev, curr] = [arr[i - 1], arr[i]]
    let isInreasing = curr > prev
    let isDecreasing = curr < prev

    if (isInreasing) {
      position = i
    } else if (isDecreasing && position !== -1) {
      res.pos.push(position)
      res.peaks.push(arr[position])
      position = -1
    }
  }

  return res
}
