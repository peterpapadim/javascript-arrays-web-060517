var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (array, add) => {
	return [add, ...array]
}

var destructivelyAddElementToBeginningOfArray = (array, add) => {
  array.unshift(add)
  return array
}

var addElementToEndOfArray = (array, add) => {
  return [...array, add]
}

var destructivelyAddElementToEndOfArray = (array, add) => {
  array.push(add)
  return array
}

var accessElementInArray = (array, index) => {
  return array[index]
}

var destructivelyRemoveElementFromBeginningOfArray = (array) => {
  array.shift()
  return array
}

var destructivelyRemoveElementFromEndOfArray = (array) => {
  array.pop()
  return array
}

var removeElementFromEndOfArray = (array) => {
  newArray = array.slice(0, array.length - 1)
  return newArray
}

var removeElementFromBeginningOfArray = (array) => {
  newArray = array.slice(1)
  return newArray
}
