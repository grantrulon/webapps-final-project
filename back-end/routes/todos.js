import express from "express";

const router = express.Router();

/* GET projects/:project_id/todos */
router.get("/", async function (req, res, next) {
  const db = await req.app.get('db')('todos');
  const data = await db.find({project_id: Number(req.params.project_id)}).toArray();
  res.json(data);
});

/* GET projects/:project_id/todos/:todo_id */
router.get("/:todo_id", async function (req, res, next) {
  const db = await req.app.get('db')('todos');
  const data = await db.findOne({ todo_id: parseInt(req.params.todo_id) });
  res.json(data);
});

/* POST projects/:project_id/todos */
router.post("/", async function (req, res) {
  const db = await req.app.get('db')('todos');
  const data = req.body;
  db.insertOne(data);
  res.status(201).json(data);
});

/* PUT /projects/:project_id/todos/:todo_id */
router.put("/:todo_id", async function (req, res) {
  const db = await req.app.get('db')('todos');
  db.replaceOne({
      todo_id: parseInt(req.params.todo_id)
  }, {
      ...(req.body)
  });
  res.json(req.body);
});

/* DELETE /projects/:project_id/todos/:todo_id */
router.delete("/:todo_id", async function (req, res) {
  const db = await req.app.get('db')('todos');
  db.deleteOne({
      todo_id: parseInt(req.params.todo_id)
  });
  res.sendStatus(200);
});

/* PATCH /projects/:project_id/todos/:todo_id */
router.patch("/:todo_id", async function (req, res) {
  const db = await req.app.get("db")("todos");
  await db.updateOne({ todo_id: parseInt(req.params.todo_id) }, { $set: req.body });
  const changedTodo = await db.findOne({ todo_id: parseInt(req.params.todo_id) });
  res.status(200).json(changedTodo);
});

export { router as todosRouter };
