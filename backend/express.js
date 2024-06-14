const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/";

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const express = require("express");
const app = express();
const port = 3004;

const userSchema = new mongoose.Schema({
  productName: String,
  Price: Number,
  description: String,
  category: String,
});

const User = mongoose.model("User", userSchema, "users-list");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/users-list", async (request, response) => {
  try {
    const products = await User.find();
    response.json(products);
  } catch (error) {
    response.status(500).json({ error: "Error fetching products" });
  }
});

// app.get("/", async (req, res) => {
//   const user = new User({
//     firstName: "mahesh",
//     lastName: "kumar",
//     Phone: "99999999",
//   });

//   user
//     .save()
//     .then(function (doc) {
//       console.log("User saved:", doc);
//       res.send("User saved: " + doc);
//     })
//     .catch(function (err) {
//       console.log("Error saving user:", err);
//       res.status(500).send("Error saving user");
//     });
// });
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/users-list", async (req, res) => {
  try {
    const productsData = req.body;
    const newUser = new User(productsData);
    const savedUser = await newUser.save();
    res.status(201).json({
      message: "New user added successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({ error: "Error adding user" });
  }
});
