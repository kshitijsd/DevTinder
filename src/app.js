const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const { authenticate } = require("./middlewares/auth");
const { error } = require("./middlewares/errorHandle");
const { UserModel } = require("./models/user");

connectDB()
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
  });

app.use(express.json());

app.post("/signup",async (req,res)=>{

  console.log("Signup route accessed:", req.body);
  const userObj=req.body;
  const user= new UserModel(userObj);// creating a new instance of UserModel
    // const userObj={
    //     fname:"Somya",
    //     lname:"Srivastava",
    //     email:"somya.sd.7@example.com",
    //     password:"somya123",
    //     age:21,
    //     gender:"female"  
    //   }
    //       const user= new UserModel(userObj);// creating a new instance of UserModel
      try{
     
      await user.save();
    res.send("Signup route: User created successfully");

      }
      catch(err){
        res.status(500).send("Error creating user");
      }
      
     
  })

