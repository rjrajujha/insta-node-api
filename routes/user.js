const Posts = require('../models/user')
const express = require("express")
const multer = require("multer")
const fileUpload = multer()
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')

const router = express.Router();
const dotenv = require('dotenv')
dotenv.config();
cloudinary.config({

    cloud_name: process.env.CLOUD_NAME || 'dktebfwtc',
    api_key: process.env.API_KEY || '229475991692668',
    api_secret: process.env.API_SECRET || 'qhK5mhQCHe2AFhC1qJ7313cutPA'
});
router.get("/", async (req, res) => {
    try {
        const posts = await Posts.find().sort({ date: -1 });
        console.log(posts)
        res.status(200).json(posts)

    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})
router.post("/", fileUpload.single('image'), (req, res, next) => {
    let streamUpload = (req) => {
        return new Promise((resolve, reject) => {
            let stream = cloudinary.uploader.upload_stream(
                (error, result) => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject(error);
                    }
                }
            );
            streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
    };
    async function upload(req) {
        try {
            let result = await streamUpload(req);
            console.log("result", result);
            req.body.PostImage = result.url;
            next();
        } catch (e) {
            console.log("error", e)
        }

    }
    upload(req);
}, async (req, res) => {
    try {
        let result = await Posts.create({ ...req.body });
        res.status(200).json(result)
        console.log(result)

    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

module.exports = router;