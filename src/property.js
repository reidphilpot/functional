const identity = d => d

export default k => {
  if (!k) return identity

  return d => k
    .split('.')
    .reduce((obj, k) => (
      obj == null
        ? undefined
        : obj[k]
    ), d)
}
