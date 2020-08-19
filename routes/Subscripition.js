const express = require('express')
const router = require('express').Router()

const {
    getAll,
    createSub
} = require('../controllers/Subscription')

router.get('/subs', getAll)
router.post('/subs',createSub )

module.exports = router