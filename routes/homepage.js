const express = require("express")
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.status(200).json(posts);
        res.send('Homepage');
        res.end();
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
});

router.use("/use", async (req, res) => {
    try {
        res.status(200).json(posts);
        res.send('Homepage with use');
        res.end();
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
});

module.exports = router;