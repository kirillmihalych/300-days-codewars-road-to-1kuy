var func = function (item) {
  return Number(item) % 2 === 0
}

function map(arr, somefunction) {
  if (typeof somefunction !== 'function')
    return 'given argument is not a function'
  if (!arr.length) return 'array should contain only numbers'

  var res = []
  for (var i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) return 'array should contain only numbers'
    res.push(somefunction(arr[i]))
  }
}
return res
