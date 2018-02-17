exports.getSchema = async (Schema) => {
  const result = await Schema.find().lean()
  return result
}

exports.getSchemaById = async (Schema, id) => {
  const result = await Schema.findById(id).lean()
  return result
}

// Poderia haver varios properties
exports.getSchemaByProperty = async (Schema, propertyName, propertyValue) => {
  let query = {}
  query[propertyName] = propertyValue
  const result = await Schema.find(query).lean()
  return result
}

exports.createSchema = async (Schema, info) => {
  const model = new Schema({
    ...info
  })
  const createdModel = await model.save()
  return createdModel
}

exports.updateSchema = async (Schema, id, modifications) => {
  const updatedModel = await Schema.update({_id: id}, modifications)
  return updatedModel
}

exports.deleteSchema = async (Schema, id) => {
  await Schema.findByIdAndRemove(id)
}
