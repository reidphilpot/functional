module.exports = function maybe (fn) {
  return function () {
    var i

    if (arguments.length === 0) {
      return
    }
    else {
      for (i = 0; i < arguments.length; ++i) {
        if (arguments[i] == null) return arguments[i]
      }
      return fn.apply(this, arguments)
    }
  }
}