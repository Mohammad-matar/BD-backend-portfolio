const About = require("../models/about");

//getALl
class Controller {
    getAll(req, res, next) {
        About.find((err, response) => {
            if (err) return next(err);
            res.status(200).json({ data: response });
        });
    }

    //get By Id
    getById(req, res, next) {
        let { id } = req.params;
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            About.findOne({ _id: id }, (err, response) => {
                if (err) return next(err);
                res.status(200).json({ success: true, response });
            });
        }
        else
            res.status(404).json({ success: false, response: "error" });
    }
    //add
    post(req, res, next) {
        let body = req.body;
        console.log(body)
        let doc = new About(body);
        doc.save((err, response) => {
            if (err) return next(err);
            res.status(200).send({ success: true, response });
        });
    }

    //edit
    put(req, res, next) {
        let { id } = req.params;
        let data = req.body;
        About.updateOne({ _id: id }, data, (err, response) => {
            if (err) return next(err);
            res.status(200).send({ success: true, response });
        });
    }

    //delete
    delete(req, res, next) {
        let { id } = req.params;
        About.findByIdAndDelete({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send({ success: true, response });
        });
    }
}

const controller = new Controller();
module.exports = controller;