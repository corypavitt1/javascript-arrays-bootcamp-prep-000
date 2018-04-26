var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(array, element) {

return [element,...array]

}

function destructivelyAddElementToBeginningOfArray(chocolateBars, name) {
    chocolateBars.unshift(name)
    return chocolateBars

}

function addElementToEndOfArray(chocolateBars, name) {
  return [...chocolateBars, name]
}

function destructivelyAddElementToEndOfArray(chocolateBars, name) {
  chocolateBars.push(name)
  return chocolateBars
}

function accessElementInArray(array, index) {
  return array[0]
}
