const { Schema, model } = require('mongoose');

const ServicesSchema = new Schema({

    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }

},
    {
        timestamps: true,
        collaction: "Services"
    }
)
const Service = model("Service", ServicesSchema);
module.exports = Service;