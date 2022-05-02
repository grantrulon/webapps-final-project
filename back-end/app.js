import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import { projectsRouter } from "./routes/projects.js";
import { todosRouter } from "./routes/todos.js";
import connect from "./lib/db.js";
import cors from "cors";

const app = express();

app.set("db", async (collection) => {
  const mongo = await connect();
  return mongo.db("projects_todos").collection(collection);
});

app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), "public")));

app.use("/projects", projectsRouter);
app.use("/projects/:project_id/todos", todosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
