let mongoose = require ('mongoose')
let Schema = mongoose.Schema

let eventSchema= new Schema({
    name:{
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    cause: {
        type: Schema.Types.ObjectId,
        ref:'Cause',
        required: false
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