const mongoose=require('mongoose')
const express=require('express')
const app=express()
const User=require('../mongodb/schema')
const login=async(req,res)=>{
    let docTitle
    let messages
    let path
    await mongoose.connect('mongodb+srv://dark:F8WOw0Ys8IlwhUGj@cluster0.jbr7ely.mongodb.net/?retryWrites=true&w=majority')
    let datas=req.body
    const loginUser=await User.findOne({email:req.body.email})||null
    if(loginUser===null){ 
        messages="cannot find Email goto Signup"
        path='login'
        title='index'
    }
    else if(loginUser.password!==datas.password){
        messages="password incorrect"
        path='login'
        title='index'
    }
    else if(loginUser!==null && loginUser.password===req.body.password){
        messages="succes"
        path='home'
        title='home'
    }
    else{
        messages='wrong'
    }
    if(path==='home'){res.redirect(path)}
    else{
    res.render(path,{
        docTitle:'login',
        email:req.body.email,
        password:datas.password,
        messages:messages,
        path:'index'})
    }
}

module.exports={login}