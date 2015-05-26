var nonWord = /\W+/g

module.exports = function slugify(text) {
  return (text || '').replace(nonWord, '-') 
}