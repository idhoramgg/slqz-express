const express = require('express')
const router = require('express').Router()

const {
    getAll,
    createUser
} = require('../controllers/User')

router.get('/users', getAll)
router.post('/users',createUser )

module.exports = router