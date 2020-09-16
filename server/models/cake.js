const mongoose = require('mongoose')
const { url } = require('inspector')


const ReactionsSchema = new mongoose.Schema({
    comment: {type: String, required: true},
    rating: {type: Number, default: 0},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}

})

const Reaction = mongoose.model('Reaction', ReactionsSchema)

const CakesSchema = new mongoose.Schema({
    baker: {type: String, required: true},
    picture: {type: String},
    comment: [ReactionsSchema],
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
})

const Cake = mongoose.model('Cake', CakesSchema)

module.exports = {
    Cake:Cake,
    CakesSchema:CakesSchema,
    Reaction:Reaction,
    ReactionsSchema:ReactionsSchema
}