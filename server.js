// import http from 'http'
// const  server=http.createServer((req,res)=>{

// })

// server.listen(3000,()=>console.log('Server listening...'))

import express from "express";
import cookieParser from "cookie-parser";
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




//view engin template ucun bucur set etmek lazimdi
app.set("view engine", "hbs");

const posts = [
  {
    id: 1,
    fulllName: "Azer Abishov",
    title: "Html",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

const users=[
  {username:'admin',password:'admin'}
]

app.get('/login',(req,res)=>{
  res.render('login')
})

app.get("/", (req, res) => {
  

  res.render("index", {
    posts,
    isAuth:Boolean(req.cookies.token)?'log out':'log in'
  });
});

app.get("/create", (req, res) => {
    
    res.render("create");
});



app.post("/submit", (req, res) => {
  console.log(req.body);

  const {title,description}=req.body
  
  const newPost={
    id:2,
    fulllName:"Azer Abishov",
    title,
    description
  }

  posts.push(newPost)

 
 
  res.redirect('/')
});

app.post('/submit-login',(req,res)=>{
  const {username,password}=req.body

  if(users.find(u=>u.username===username && u.password===password)){
    const token='token'
    res.cookie('token',token,{maxAge:360000})
    res.redirect('/')
  }
  else{
    res.redirect('/login?error=true')
  }
})

app.listen(3000, () => console.log("server listening.."));
