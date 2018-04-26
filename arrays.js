var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(chocolateBarsName, name) {

return [chocolateBarsName,...name]

}

function destructivelyAddElementToBeginningOfArray(chocolateBarsNamed, name) {

 chocolateBarsNamed.unshift(name)
 return chocolateBarsNamed

}

function addElementToEndOfArray(chocolateBarsNames, name) {
  return [...name,chocolateBarsNames]
}

function destructivelyAddElementToEndOfArray(chocolateBarsNames, name) {
  chocolateBarsNames.push(name)
  return chocolateBarsNames
}
