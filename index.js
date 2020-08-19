const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/connection')
const app = express()

// router
const userRouter = require('./routes/User')

// models
const User = require('./models/User')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// sequelize up connection
db
.authenticate()
.then(()=> {
    console.log('Database Sequelize connected...')
})
.then(()=> {
    User.sync().then(()=> console.log('Table created'))
})
.catch(err => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/', userRouter )

app.listen(4001, ()=> {
    console.log('Server is running...')
})