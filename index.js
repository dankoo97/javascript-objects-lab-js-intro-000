function updateObjectByKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object)
  obj[key] = value
  return obj
}

function destructivelyUpdateObjectByKeyAndValue(object, key, value) {

}
