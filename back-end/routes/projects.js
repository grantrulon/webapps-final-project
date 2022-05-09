import express from "express";
import { todosRouter } from "./todos.js";

const router = express.Router();
todosRouter.mergeParams = true;
router.use("/projects/:project_id/todos", todosRouter);


/* GET /projects */
router.get("/", async function (req, res, next) {
  const db = await req.app.get('db')('projects');
  const data = await db.find().toArray();
  res.json(data);
});

/* GET /projects/:project_id */
router.get("/:project_id", async function (req, res, next) {
  const db = await req.app.get('db')('projects');
  const data = await db.findOne({ project_id: parseInt(req.params.project_id) });
  res.json(data);
});


/* POST /projects */
router.post("/", async function (req, res) {
  const db = await req.app.get('db')('projects');
  const data = req.body;
  db.insertOne(data);
  res.status(201).json(data);
});

/* PUT /projects/:project_id */
router.put("/:project_id", async function (req, res) {
  const db = await req.app.get('db')('projects');
  db.replaceOne({
      project_id: parseInt(req.params.project_id)
  }, {
      ...(req.body)
  });

  res.json(req.body);
});

/* DELETE /projects/:project_id */
router.delete("/:project_id", async function (req, res) {
  const db = await req.app.get('db')('projects');
  const db2 = await req.app.get('db')('todos');
  db.deleteOne({
      project_id: parseInt(req.params.project_id)
  });
  db2.deleteMany({
    project_id: parseInt(req.params.project_id)
});

  res.sendStatus(200);
});

/* PATCH /Pprojects/:project_id */
router.patch("/:project_id", async function (req, res) {
  const db = await req.app.get("db")("projects");
  await db.updateOne({ project_id: parseInt(req.params.project_id) }, { $set: req.body });
  res.status(200);
});


export { router as projectsRouter };
