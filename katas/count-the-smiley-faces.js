function countSmileys(arr) {
  let regexp = /^[:;][-~]?[\)D]$/g

  return arr.reduce(function (smiles, face) {
    const isSmiling = face.match(regexp)
    if (isSmiling) smiles++
    return smiles
  }, 0)
}

console.log(countSmileys([':D', ':~)', ';~D', ':)']))
