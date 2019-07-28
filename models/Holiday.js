const mongoose = require('mongoose')

const holidaySchema = new mongoose.Schema({
    date: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required: true
    }
})

let holiday = mongoose.model('Holiday', holidaySchema)
module.exports = holiday