let mongoose = require ('mongoose');
let Schema = mongoose.Schema;

let causeSchema = new Schema ({
    ongname: {
        required: true,
        type: String
    },
    photoURL:{
        type: String,
        default: 'https://kitchenaid-h.assetsadobe.com/is/image/content/dam/brand/maytag/en-us/feature/icons/MTG_Icon_OwnerCenter_ScheduleService.png?$3-col-desktop$'
    },
    description:{
        default: 'Estamos actualizando la información',
        type: String
    },
    category: {
    type: String,
    enum: ["Cultural", "Ecológica", "Educativa", "Investigación científica", "Servicios públicos"]
    },
    rfc: {
        type: String,
        required: true
    },
    eventsForTheCause: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ],
    sponsors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})


module.exports = mongoose.model('Cause', causeSchema)