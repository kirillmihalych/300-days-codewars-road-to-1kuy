function chained(functions) {
  return function (x) {
    return functions.reduce((y, f) => {
      return f(y)
    }, x)
  }
}
