const express = require('express')
const router = require('express').Router()

const {
    getAll,
    createHistory,
    getOne
} = require('../controllers/HistoryWatch')

router.get('/history', getAll)
router.post('/history',createHistory )
router.get('/history/:id',getOne )

module.exports = router