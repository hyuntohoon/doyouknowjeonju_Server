const express = require("express");

const userRouter = require("./routes/userRoutes");
const todolistRouter = require("./routes/todolistRoutes");
const parkingRouter = require("./routes/parkingRoutes");
const hospitalRouter = require("./routes/hospitalRoutes");
const bookmarkRouter = require("./routes/bookmarkRoutes");

const app = express();

app.use("/api/user", userRouter);
app.use("/api/todolist", todolistRouter);
app.use("/api/parking", parkingRouter);
app.use("/api/hospital", hospitalRouter);
app.use("/api/bookmark", bookmarkRouter);

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

module.exports = app;
