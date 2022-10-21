const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors')
const category = require('./Data/data.json')
const news = require('./Data/newsData.json')

app.use(cors())
app.get('/', (req, res) => {
    res.send('Request accepted')
})

app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.listen(port, () => {
    console.log(`This is port ${port}`);
})