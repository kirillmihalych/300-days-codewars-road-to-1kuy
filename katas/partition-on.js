function partitionOn(pred, items) {
  let trues = items.filter((item) => pred(item))
  let falses = items.filter((item) => !pred(item))
  let newItems = trues.concat(falses)
  items.slice(0, items.length, ...newItems)
  return falses.length
}

// tests
var items = [1, 2, 3, 4, 5, 6]
function isEven(n) {
  return n % 2 == 0
}

var i = partitionOn(isEven, items)
console.log(i)
console.log(items)
