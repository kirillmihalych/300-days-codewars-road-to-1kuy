function permutations(string) {
 const map = countDuplicates(string)
 
 function recursiveHelper(str, box = [], permutations = []){
  if(box.length === string.length){
   permutations.push(box.slice())
   return 
  }

 for(const [key, value] of map){
  console.log(key, value)
  if(value === 0) continue
  box.push(key)
  map.set(key, map.get(key) - 1)
  recursiveHelper(str, box, permutations)
  map.set(key, map.get(key) + 1);
  box.pop()
 }  
 
 return permutations
 }
 
 
 return recursiveHelper(string)
}

function countDuplicates(str){
 const map = new Map()
 for(let i=0; i<str.length; i++){
  map.set(str[i], map.get(str[i]) + 1 || 1)
 }
 return map
}

console.log(permutations('aabb'))

// [x] try to understand why result.push(box) pushing empty box