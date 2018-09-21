const express = require('express')
const bodyParser = require('body-parser')
let phxos = require('./routes/main')

let app = express()

// Sets
app.set('view engine', 'pug')
app.set('views', './views')

// Uses
app.use(bodyParser.json())
app.use('/phxos', phxos)
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.redirect('/phxos')
})

app.listen(8000, () => console.log('Server Started'))