export default (fn, ...x) => (...y) => fn(...x, ...y)
