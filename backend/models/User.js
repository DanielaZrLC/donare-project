let mongoose = require ('mongoose')
let Schema = mongoose.Schema 
let passportLocalMongoose = require('passport-local-mongoose')

let UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required:true
    },
    profilePic: {
        type: String,
        default: 'https://static.thenounproject.com/png/17241-200.png',
    },
    role: {
        type: String,
        admin: ['guest', 'admin','ong'],
        default : 'guest'
    },
    causes:{
        adoptedCauses:[
            {
                type: Schema.Types.ObjectId,
                ref: "Cause"
            }
        ],
        payedCauses: [
            {
                type: Schema.Types.ObjectId,
                ref:"Cause"
            }
        ],
    },
    rfc: {
        type: String,
    },
},{timestamps:true})

UserSchema.plugin(passportLocalMongoose,{username:"email"})

module.exports = mongoose.model('User', UserSchema)