// import http from 'http'
// const  server=http.createServer((req,res)=>{

// })

// server.listen(3000,()=>console.log('Server listening...'))

import express from "express";
import cookieParser from "cookie-parser";
import data from './models/data.js'
import authRoutes from './routes/auth.js'
import postsRoutes from './routes/posts.js'

const app = express();

//request bodysini bu midleware ile jsona cevirmek ucundu
app.use(express.json());
app.use(express.urlencoded());

app.use(cookieParser())


app.use('/create',(req,res,next)=>{
  const token=req.cookies.token
 
  if(token){
   next()
 
  }else{
   res.redirect('/login')
  }
 })


app.use(authRoutes)
app.use(postsRoutes)






//view engin template ucun bucur set etmek lazimdi
app.set("view engine", "hbs");






app.get("/", (req, res) => {
  

  res.render("index", {
    posts:data.posts,
    isAuth:Boolean(req.cookies.token)?'log out':'log in'
  });
});





app.listen(3000, () => console.log("server listening.."));
