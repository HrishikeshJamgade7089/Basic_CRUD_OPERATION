//The below line calls the Router class of Express and destructure it into a constant named as Router
const {Router} = require('express');
const {getTasks,saveTasks, updateTasks, deleteTasks} = require("../Controllers/TaskController.js");

const router = Router();

router.get("/get", getTasks);
router.post("/save", saveTasks);
router.put("/update/:id",updateTasks);
router.delete("/delete/:id", deleteTasks);

module.exports = router;