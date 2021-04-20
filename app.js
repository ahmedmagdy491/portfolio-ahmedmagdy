const express = require('express')
require('dotenv/config')
const path = require('path')
const app = express()

// View Engine
app.set('view engine', 'pug');
// set the views "folder" is the views 
app.set('views', 'views');

// Static Files
app.use(express.static(path.join(__dirname, "public")));


const port = process.env.port || 4000


app.listen(port, ()=>{
    console.log('port listen on port', port)
})

app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/about', (req,res)=>{
    res.render('about')
})
app.get('/work', (req,res)=>{
    res.render('work')
})
app.get('/contact', (req,res)=>{
    res.render('contact')
})