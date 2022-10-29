import express from 'express'

import data from '../models/data.js'

const router=express.Router()


router.get('/login',(req,res)=>{
    res.render('login')
  })

router.post('/submit-login',(req,res)=>{
    const {username,password}=req.body
  
    if(data.users.find(u=>u.username===username && u.password===password)){
      const token='token'
      res.cookie('token',token,{maxAge:360000})
      res.redirect('/')
    }
    else{
      res.redirect('/login?error=true')
    }
  })



export default router;