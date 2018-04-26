var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(chocolateBars, name) {

return [chocolateBars,...name]

}

function destructivelyAddElementToBeginningOfArray(chocolateBars, name) {

 chocolateBars.unshift(name)
 return chocolateBarsNamed

}

function addElementToEndOfArray(chocolateBarsNames, name) {
  return [...name,chocolateBarsNames]
}

function destructivelyAddElementToEndOfArray(chocolateBarsNames, name) {
  chocolateBarsNames.push(name)
  return chocolateBarsNames
}
