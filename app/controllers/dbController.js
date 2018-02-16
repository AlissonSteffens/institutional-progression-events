const mongoose = require('mongoose')

const db = require('../../config/db')

exports.getSchema = async (Schema) => {
  await mongoose.connect(db.url)
  const result = await Schema.find().lean()
  return result
}

exports.getSchemaById = async (Schema, id) => {
  await mongoose.connect(db.url)
  const result = await Schema.findById(id).lean()
  return result
}

// Poderia haver varios properties
exports.getSchemaByProperty = async (Schema, propertyName, propertyValue) => {
  await mongoose.connect(db.url)
  let query = {}
  query[propertyName] = propertyValue
  const result = await Schema.find(query).lean()
  return result
}

exports.createSchema = async (Schema, info) => {
  await mongoose.connect(db.url)
  const model = new Schema({
    ...info
  })
  const createdModel = await model.save()
  return createdModel
}

exports.updateSchema = async (Schema, id, modifications) => {
  await mongoose.connect(db.url)
  const updatedModel = await Schema.update({_id: id}, modifications)
  return updatedModel
}

exports.deleteSchema = async (Schema, id) => {
  await mongoose.connect(db.url)
  await Schema.findByIdAndRemove(id)
}
