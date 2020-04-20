function deepEqual(obj1, obj2) {
  // Get the props for each object
  const firstProps = Object.getOwnPropertyNames(obj1)
  const secondProps = Object.getOwnPropertyNames(obj2)

  if (firstProps.length !== secondProps.length) return false

  return firstProps.every((key) => {
    return obj1[key] === obj2[key]
  })
}
