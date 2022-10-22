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

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_news = news.filter(n => n.category_id === id)
    res.send(category_news)
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const AllNews = news.find(n => n._id === id)
    res.send(AllNews) 
})

app.listen(port, () => {
    console.log(`This is port ${port}`);
})