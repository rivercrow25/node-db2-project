const express = require('express')
const knex = require('knex')
const knexfile = require('../knexfile')
const db = knex(knexfile.development)

const router = express.Router()

router.get('/', (req, res) => {
    db('cars')
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ message: 'it failed', error: error.message })
        })
})

router.post('/', (req, res) => {
    db('cars')
        .insert(req.body)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

router.get('/:id', (req, res) => {
    db('cars')
        .where('id', req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

router.put('/:id', (req, res) => {
    db('cars')
        .where('id', req.params.id)
        .update(req.body)
        .then(response => {
            res.status(200).json({ message: `successfully updated ${response} car/'s` })
        })
        .catch(error => {
            res.status(500), json({ error: error.message })
        })
})

router.delete('/:id', (req, res) => {
    db('cars')
        .where('id', req.params.id)
        .del()
        .then(response => {
            res.status(200).json({ message: `successfully deleted ${response} car/'s` })
        })
})

module.exports = router