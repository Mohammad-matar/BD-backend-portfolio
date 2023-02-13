const { Schema, model } = require('mongoose');

const AboutSchema = new Schema({
    
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    cv: {
        type: String,
        required: true,
    }

},
    {
        timestamps: true,
        collaction: "Abouts"
    }
)
const About = model("About", AboutSchema);
module.exports = About;