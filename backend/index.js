const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const port = 8000;

const rootDir = require("./util/path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const User = require("./model/user");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.use((req, res, next) => {
  User.findById("60f17245fe600c262cb27112")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err.message));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// app.get("/", (req, res, next) => {
//   return res.json({ message: "Settyl Backend training" });
// });

// app.get("/home", (req, res, next) => {
//   res.sendFile(__dirname + "/views/sendmessage.html");
// });

// app.post("/message", (req, res, next) => {
//   console.log(req.body);
//   res.send(`<h1>${req.body.message}</h1>`);
// });
mongoose
  .connect(
    "mongodb+srv://admin-mithun:Mithun1234@cluster0.bufev.mongodb.net/settylBackendTraining?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "mithun",
          email: "test@gmail.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    console.log("db connected");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
