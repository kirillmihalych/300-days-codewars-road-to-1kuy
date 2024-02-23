function humanReadable(seconds) {
  function pad(num) {
    return num < 10 ? `0${num}` : `${num}`
  }
  let hh
  let mm
  let ss = seconds

  function getHours() {
    let hours = Math.floor(ss / 3600)
    hh = pad(hours)
    ss = ss - hours * 3600
  }
  getHours()

  function getMinutes() {
    let minutes = Math.floor(ss / 60)
    mm = pad(minutes)
    ss = ss - minutes * 60
  }
  getMinutes()

  ss = pad(ss)
  return `${hh}:${mm}:${ss}`
}

console.log(humanReadable(0))
