let mongoose = require ('mongoose')
let Schema = mongoose.Schema 
let passportLocalMongoose = require('passport-local-mongoose')

let userSchema = new Schema({
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
        default: 'https://images.vexels.com/media/users/3/137047/isolated/preview/5831a17a290077c646a48c4db78a81bb-user-profile-blue-icon-by-vexels.png',
    },
    role: {
        type: String,
        admin: ['guest', 'admin','ong'],
        default : 'guest'
    },
    eventsCreated:[
        {
            type: Schema.Types.ObjectId,
            ref: "Event"
        }
    ],
    eventsSupported: [
        {
            type: Schema.Types.ObjectId,
            ref:"Event"
        }
    ],
    causesSupported: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Cause'
        }
    ]
    ,
    rfc: {
        type: String,
    } 
},{timestamps:true})

userSchema.plugin(passportLocalMongoose,{usernameField:"email"})

module.exports = mongoose.model('User', userSchema)