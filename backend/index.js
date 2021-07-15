const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

const port = 8000;

const rootDir = require("./util/path");
const adminRoutes = require("./routes/admin");

app.use(express.urlencoded({ extended: false }));
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.use("/admin", adminRoutes);

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
    console.log("db connected");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
