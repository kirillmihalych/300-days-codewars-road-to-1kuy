const multiFilter =
  (...fns) =>
  (x) =>
    fns.every((f) => f(x))
