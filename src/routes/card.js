let CustomerModel = require('../models/card.model')
const express = require('express')
const router = express.Router()

router.post('/card', (req, res) => {
    //req.body
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }

    let model = new CustomerModel(req.body)

    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }

            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get('/card/:tag', (req, res) => {
    CustomerModel.finOne({
        tag: req.params.tag
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.put('/card/:tag', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }

    CustomerModel.findOneAndUpdate({
        tag: req.params.tag
    }, req.body, {
        new: true
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.put('/card/:tag', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }

    CustomerModel.findOneAndRemove({
        tag: req.params.tag
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router