let CustomerModel = require('../models/customer.model')
const express = require('express')
const router = express.Router()

router.post('/customer', (req, res) => {
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

router.get('/customer/:email', (req, res) => {
    CustomerModel.finOne({
        email: req.params.email
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.put('/customer/:email', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }

    CustomerModel.findOneAndUpdate({
        email: req.params.email
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

router.put('/customer/:email', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }

    CustomerModel.findOneAndRemove({
        email: req.params.email
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router