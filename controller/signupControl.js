const mongoose=require('mongoose')
const user=require('../mongodb/schema')
const signup=async(req,res)=>{
    await mongoose.connect('mongodb+srv://dark:F8WOw0Ys8IlwhUGj@cluster0.jbr7ely.mongodb.net/?retryWrites=true&w=majority')
    const usernames=await user.findOne({name:req.body.name})||null
    const emails=await user.findOne({email:req.body.email})||null
   if(usernames!==null){
       message="username already taken"
       path='signup'
       title='signup'
   }
   else if(emails!==null){
     message='Gmail already registered'
     path='signup'
     title='signup'
   }
   else if(req.body.password!==req.body.repassword){
     message='password not match'
     path='signup'
     title='signup'
   }
   else if(req.body.password===req.body.repassword){
     const UserDetails=await user.create(
     {
     name:req.body.name,
     email:req.body.email,
     password:req.body.password
     })
     path='home'
     title='home'
 }
 else{
     message="something worng" 
 }
 if(path==='home'){res.redirect(path)}
 else{
 res.render(path,{
     docTitle:title,
     messages:message,
     name:req.body.name,
     email:req.body.email,
     password:req.body.password,
     repassword:req.body.repassword,
     signupmessage:message
   }) 
  }
 }
 module.exports=signup