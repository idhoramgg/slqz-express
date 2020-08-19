const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/connection')
const app = express()

// router
const userRouter = require('./routes/User');
const movieRouter = require('./routes/Movies');
const subscribeRouter = require('./routes/Subscripition');
const historyRouter = require('./routes/HistoryWatch');

// models
const User = require('./models/User');
const Subscription = require('./models/Subscription');
const Movies = require('./models/Movies');
const HistoryWatch = require('./models/HistoryWatch')

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
    Subscription.sync().then(()=> console.log('Table created'))
    Movies.sync().then(()=> console.log('Table created'))
    HistoryWatch.sync().then(()=> console.log('Table created'))
})
.catch(err => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/', userRouter)
app.use('/', movieRouter)
app.use('/', subscribeRouter)
app.use('/', historyRouter)


app.listen(4001, ()=> {
    console.log('Server is running...')
})