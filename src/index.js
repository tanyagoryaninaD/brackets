module.exports = function check(str, bracketsConfig) {
  let arr = str.split('')
  for (let i=0; i<arr.length; i++) {
    for (let configs of bracketsConfig) {
      if (arr[i] === configs[1] && arr[i-1] === configs[0]) {
        arr.splice(--i,2)
        i--
      }      
    } 
  }
  return arr.length>0 ? false : true
}