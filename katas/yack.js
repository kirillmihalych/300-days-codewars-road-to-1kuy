function yack(fn, ...xs) {
  if (xs.length >= fn.length) {
    return fn(...xs)
  } else {
    return (...ys) => yack(fn, ...xs, ...ys)
  }
}
