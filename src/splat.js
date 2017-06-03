export default fn => {
  return function (list) {
    return Array.prototype.map.call(list, fn)
  }
}
