var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(chocolateBarsName, name) {

return ['chocolateBarsName',...name]

}

function destructivelyAddElementToBeginningOfArray(chocolateBarsName, name) {

 chocolateBarsName.unshift(name)
 return chocolateBarsName

}

function addElementToEndOfArray(chocolateBarsName, name) {
  return [...name,'chocolateBarsName']
}

function destructivelyAddElementToEndOfArray(chocolateBarsName, name) {
  chocolateBarsName.push(name)
  return chocolateBarsName
}
