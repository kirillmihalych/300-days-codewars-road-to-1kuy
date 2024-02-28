Array.prototype.reduce = function (reducer, initial) {
  const hasNoInitial = arguments.length === 1
  let result = initial
  for (let i = 0; i < this.length; i++) {
    if (hasNoInitial && i === 0) {
      result = this[i]
    } else {
      result = reducer(result, this[i], i, this)
    }
  }
  return result
}
