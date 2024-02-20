const state = {
  modifier: 2,
}

function solution(arr, options) {
  return arr.map((n) => n + 2 * options.modifier)
}

console.log(solution([1, 2, 3], state))
