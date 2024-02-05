Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other) || other.length !== this.length) {
    return false
  }

  let result = null

  function recursiveHelper(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      const isBothFlattened =
        Array.isArray(arr1[i]) === false && Array.isArray(arr2[i]) === false
      if (isBothFlattened) {
        result = true
        continue
      }

      const hasSameNestings = Array.isArray(arr1[i]) === Array.isArray(arr2[i])
      const hasSameLengths = arr1[i].length === arr2[i].length
      if (hasSameNestings && hasSameLengths) {
        result = true
        recursiveHelper(arr1[i], arr2[i])
      } else {
        result = false
        return
      }
    }
  }

  recursiveHelper(this, other)

  return result
}

// console.log([1, [1, 1]].sameStructureAs([2, [2, 2]]))
// console.log([1, 1, 1].sameStructureAs([2, 2, 2]))
// console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]))
// console.log([1, [1, 1]].sameStructureAs([2, [2]]))
// [x] check later
// console.log([[[], []]].sameStructureAs([[[], []]]))
// console.log([[[], []]].sameStructureAs([[1, 1]]))
// console.log([1, [[[1]]]].sameStructureAs([2, [[[2]]]]))
// console.log([].sameStructureAs(1))
// console.log([].sameStructureAs({}))

// [x] check later
console.log([1, '[', ']'].sameStructureAs(['[', ']', 1]))
// console.log([1, 2].sameStructureAs([[3], 3]))
