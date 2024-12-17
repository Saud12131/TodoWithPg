"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AllContro_1 = require("./AllContro");
const router = express_1.default.Router();
router.route("/createtodo").post(AllContro_1.CreateTodo);
router.route("/deletetodo/:id").delete(AllContro_1.DeleteTodo);
router.route("/alltodos").get(AllContro_1.AllTodo);
router.route("/updatetodo/:id").put(AllContro_1.UpdateTodo);
exports.default = router;
