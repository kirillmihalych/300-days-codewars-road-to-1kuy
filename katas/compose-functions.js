var compose = (x, ...fns) => fns.reduce((x, cb) => cb(x), x)

var doubleTheValue = function (val) {
  return val * 2
}
var addOneToTheValue = function (val) {
  return val + 1
}
console.log(compose(5, addOneToTheValue, doubleTheValue))
console.log(compose(3))
