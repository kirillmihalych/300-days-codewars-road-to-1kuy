const gcdi = (a, b) => (b ? gcdi(b, a % b) : Math.abs(a))
const lcmu = (a, b) => Math.abs(a * b) / gcdi(a, b)
const som = (a, b) => a + b
const maxi = (a, b) => Math.max(a, b)
const mini = (a, b) => Math.min(a, b)

const operArray = (fct, arr, init) =>
  arr.map((u) => {
    init = fct(init, u)
    return init
  })
