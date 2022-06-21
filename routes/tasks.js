const express = require("express");
const Taskrouter = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

Taskrouter.get("/", getAllTasks)
  .post("/", createTask)
  .get("/:id", getTask)
  .patch("/:id", updateTask)
  .delete("/:id", deleteTask);

module.exports = Taskrouter;
