const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x)

const addOne = (a) => a + 1
const multTwo = (b) => b * 2

console.log(compose(addOne, multTwo, addOne, addOne)(2))
console.log(compose(addOne)(3))
console.log(compose()(10))
