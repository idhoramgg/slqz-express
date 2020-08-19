const express = require('express')
const router = require('express').Router()

const {
    getAll,
    createHistory
} = require('../controllers/HistoryWatch')

router.get('/history', getAll)
router.post('/history',createHistory )

module.exports = router