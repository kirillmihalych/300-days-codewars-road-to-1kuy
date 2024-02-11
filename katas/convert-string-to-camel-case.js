function toCamelCase(str) {
  const match = /[-|\_]\w/g

  return str.replace(match, (everyMatch) => everyMatch[1].toUpperCase())
}

console.log(toCamelCase('the_stealth_warrior'))
console.log(toCamelCase('The-Stealth-Warrior'))
