const express=require('express')
const app=express()
const cors=require('cors')
const path = require('path');
const { engine } = require('express-handlebars')
app.use(express.static(path.join(__dirname,'public')))
app.use(cors())
app.engine('hbs',engine({ extname: '.hbs', defaultLayout: false }))

app.set('view engine', 'hbs')
const PORT=process.env.PORT || 5000;
const {login}=require('./controller//loginControl')
const signUp=require('./controller/signupControl');
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/",require('./routes/main'))
app.use('/',express.static(path.join(__dirname,'public')))
app.post("/login",login)
app.post("/signup",signUp)
app.listen(PORT,()=>console.log("port is:",PORT))

