const { Schema, model } = require('mongoose');

const ExperienceSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // skill_id: [
    //     {
    //         type: Types.ObjectId,
    //         ref: "Skill",
    //     },
    // ],

},
    {
        timestamps: true,
        collaction: "Experiences"
    }
)
const Experience = model("Experience", ExperienceSchema);
module.exports = Experience;

