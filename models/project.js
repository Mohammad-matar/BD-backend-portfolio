const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({

    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    appName: {
        type: String,
        required: true,
    },
    linkTo: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
        collaction: "Projects"
    }
)
const Project = model("Project", ProjectSchema);
module.exports = Project;

