// function add(n) {
//   console.log(n)
//   function fn(x) {
//     return add(n + x)
//   }

//   fn.toString = function () {
//     return n
//   }

//   return fn
// }

function add(n) {
  // Let the currying begin!
  function foo(b) {
    return add(n + b)
  }

  foo.toString = function () {
    return n
  }

  return foo
}

console.log(add(1)(2)(3)(4)(5))
