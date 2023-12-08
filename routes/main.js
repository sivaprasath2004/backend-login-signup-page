const express=require('express')
const route=express.Router()
const app=express()
route.get('/(.html)?',(req,res)=>{
    res.redirect('/home')
})
route.get('/home(.html)?',(req,res,next)=>{
    res.render('home',{
        docTitle:"home",
        path:'home'
    })
})
route.get('/signup(.html)?',(req,res,next)=>{
    res.render('signup',{
        docTitle:'signUp',
        path:'signup'
    }) 
    
})
route.get('/login(.html)?',(req,res,next)=>{
    res.render('login',{
        docTitle:'login',
        path:'login'
    }) 
    
})
app.use(express.urlencoded({extended:false}))
module.exports=route