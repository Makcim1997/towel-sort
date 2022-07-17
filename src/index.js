
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const newMatrix = [];
  if (matrix === undefined) {
    return matrix = []
  }else { matrix.filter((item, index) => {
    newMatrix.push(item)
    if (index % 2) {
      item.reverse()
    }
  })}
  return newMatrix.flat()
}
