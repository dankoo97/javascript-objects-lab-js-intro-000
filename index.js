var recipe = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object)
  obj[key] = value
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj = Object.assign({}, object)
  delete obj[key]
  return obj
}

function destructivelyDeleteObjectByKey(object, key)
