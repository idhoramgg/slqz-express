const express = require('express')
const router = require('express').Router()

const {
    getAll,
    createMovie
} = require('../controllers/Movies')

router.get('/movies', getAll)
router.post('/movies',createMovie )

module.exports = router