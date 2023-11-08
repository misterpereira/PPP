const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

router.get('/:id', (res, req) => {
    res.json({mssg: 'GET a single workout'})
})

router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

router.delete('/', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

router.patch('/', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router