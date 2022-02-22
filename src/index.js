
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if(matrix===[]) return []
  if(matrix===undefined) return []

    let arr = []
   matrix.forEach(elem=>{
    if(matrix.indexOf(elem)%2!==0){
      elem.reverse()
    }  
     arr= arr.concat(elem)
   })
    return arr
  }