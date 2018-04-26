var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(array, element) {

return [chocolateBars,...name]

}

function destructivelyAddElementToBeginningOfArray(chocolateBars, name) {
    chocolateBars.unshift(name)
    return chocolateBars

}

function addElementToEndOfArray(chocolateBars, name) {
  return [...name,chocolateBars]
}

function destructivelyAddElementToEndOfArray(chocolateBars, name) {
  chocolateBars.push(name)
  return chocolateBars
}
