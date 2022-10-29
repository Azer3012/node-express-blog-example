import express from "express";

import data from '../models/data.js'

const router = express.Router();
router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/submit", (req, res) => {
  console.log(req.body);

  const { title, description } = req.body;

  const newPost = {
    id: 2,
    fulllName: "Azer Abishov",
    title,
    description,
  };

  data.posts.push(newPost);

  res.redirect("/");
});

export default router;
