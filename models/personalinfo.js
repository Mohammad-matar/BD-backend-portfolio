const { Schema, model } = require('mongoose');

const PersonalInfoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }

},
    {
        timestamps: true,
        collaction: "PersonalInfos"
    }
)
const PersonalInfo = model("PersonalInfo", PersonalInfoSchema);
module.exports = PersonalInfo;