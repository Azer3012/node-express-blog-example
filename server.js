// import http from 'http'
// const  server=http.createServer((req,res)=>{

// })

// server.listen(3000,()=>console.log('Server listening...'))

import express from "express";

const app = express();

//request bodysini bu midleware ile jsona cevirmek ucundu
app.use(express.json());
app.use(express.urlencoded());

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

app.get("/", (req, res) => {
  

  res.render("index", {
    posts
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

app.listen(3000, () => console.log("server listening.."));
