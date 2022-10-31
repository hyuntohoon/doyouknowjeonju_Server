const express = require("express");

const userRouter = require("./routes/userRoutes");
const todolistRouter = require("./routes/todolistRoutes");
const parkingRouter = require("./routes/parkingRoutes");
const hospitalRouter = require("./routes/hospitalRoutes");
const bookmarkRouter = require("./routes/bookmarkRoutes");
const bodyParser = require("body-parser");
const joi = require("joi");
const app = express();

app.use(express.json());
app.use(
  bodyParser.urlencoded({ extended: false })
);

app.use("/user", userRouter);
app.use("/todolist", todolistRouter);
app.use("/parking", parkingRouter);
app.use("/hospital", hospitalRouter);
app.use("/bookmark", bookmarkRouter);

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

module.exports = app;
