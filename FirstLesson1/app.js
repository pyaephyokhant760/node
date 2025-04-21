const { error } = require("console");
const e = require("express");
const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());


const userRouter = require("./route/user");
const productRouter = require("./route/product")

// app.use("/users", userRouter);
// app.use("/products", productRouter);


const {dbconnect,getDb} = require("./utils/db");
let db;
dbconnect((err) => {
  if (err) {
    console.log("Error connecting to database", err);
  } else {
    app.listen(3000, () => {
      console.clear();
      console.log("Server is running on port 3000");
      db = getDb();
    });
  }
});

app.get('/users',(req,res) => {
  let users = [];
  db.collection('users').find().forEach(user => users.push(user))
    .then(() => {
      console.log(users);
      res.json({con:true,message: "All User",data:users})
    })
    .catch((err) => {
      console.log(err);
      res.json({con:false,message:"Fail"})
    })
})

app.post('/users',(req,res) => {
  let obj = req.body;
  db.collection('users').insertOne(obj)
    .then(() => {
      res.status(200).json({con:true,message: "Create Success"})
    })
    .catch((err) => {
      res.status(500).json({con:false,message: "Fail"})
    })
})


