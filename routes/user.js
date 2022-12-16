const express = require('express');
const router = express.Router();
const user = require('../models/user');

// Getting all
router.get('/', async (req, res) => {
    try {


    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getUser, (req, res) => {
    res.json(res.user)
})

// Creating one
router.post('/', async (req, res) => {
    const user = new user({

    })
    try {
        const newuser = await user.save()
        res.status(201).json(newuser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getUser, async (req, res) => {


    try {
        const updateduser = await res.user.save()
        res.json(updateduser);

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted user' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await user.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.user = user;
    next();
}

module.exports = router