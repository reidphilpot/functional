const getType = {}

export default fn => fn && getType.toString.call(fn) === '[object Function]'
