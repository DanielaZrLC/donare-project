let mongoose = require ('mongoose')
let Schema = mongoose.Schema

let eventSchema= new Schema({
    name:{
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    cause: {
        type: Schema.Types.ObjectId,
        ref:'Cause',
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    amountMoney:{
        type: Number,
        default: 0
    },
    eventSponsors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    urlEvent: String
},
{timestamps: true})

module.exports = mongoose.model('Event', eventSchema)