const { Schema, model } = require('mongoose');

const SkillsSchema = new Schema({

    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }

},
    {
        timestamps: true,
        collaction: "skills"
    }
)
const Skill = model("Skill", SkillsSchema);
module.exports = Skill;