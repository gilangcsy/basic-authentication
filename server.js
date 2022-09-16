const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

require('dotenv').config()

const db = require('./app/models/index')
const PORT = process.env.PORT
const app = express()

app.enable('trust proxy')

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.sequelize.sync({ force: false })

//Inisasi routing pada halaman awal
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Basic Authentication! :)'
    })
})

require('./app/routes/department.routes')(app)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
    
})