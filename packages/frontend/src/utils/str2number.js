export default (str) => {
  let sum = 0
  for (const c of str) {
    sum += c.charCodeAt()
  }
  return sum
}
