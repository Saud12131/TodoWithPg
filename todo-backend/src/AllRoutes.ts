import express from "express";
import { AllTodo, CreateTodo, DeleteTodo, UpdateTodo } from "./AllContro";
const router = express.Router();

router.route("/createtodo").post(CreateTodo);
router.route("/deletetodo/:id").delete(DeleteTodo);
router.route("/alltodos").get(AllTodo);
router.route("/updatetodo/:id").put(UpdateTodo);

export default router;