const express=require('express')
const app=express()
const path = require('path');
const { engine } = require('express-handlebars')
app.use(express.static(path.join(__dirname,'public')))
app.engine('hbs',engine({ extname: '.hbs', defaultLayout: false }))
app.set('view engine', 'hbs')
const login=require('./controller/loginControl')
const signUp=require('./controller/signupControl');
const home=require('./routes/main')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/",home)
app.post("/login",login)
app.post("/signup",signUp)
app.listen(5000)
                           
