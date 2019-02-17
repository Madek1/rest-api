const express = require('express')
const app = express()

let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')
let cardRoute = require('./routes/card')

let path = require('path')
let bodyParser = require('body-parser')

const port = 3000

app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})

app.use(personRoute)
app.use(customerRoute)
app.use(cardRoute)
app.use(express.static('public'))


//Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../public/errors/404.html'))
})

//Handler for Error 500
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/errors/500.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))