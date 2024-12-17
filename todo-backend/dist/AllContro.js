"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodo = exports.DeleteTodo = exports.AllTodo = exports.CreateTodo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const CreateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, status } = req.body;
        const NewTodo = yield prisma.todo.create({
            data: {
                title: title,
                status: status,
            }
        });
        res.send({
            success: true,
            message: "new todo created"
        });
    }
    catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "unable to create new todo "
        });
    }
});
exports.CreateTodo = CreateTodo;
const DeleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        const todoId = parseInt(id, 10);
        const todo = yield prisma.todo.delete({
            where: {
                id: todoId,
            }
        });
        res.send({
            success: true,
            message: "todo Deleted",
            todo,
        });
        console.log(id);
    }
    catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "unable to delete  todo "
        });
    }
});
exports.DeleteTodo = DeleteTodo;
const AllTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Todos = yield prisma.todo.findMany({});
        res.send({
            success: true,
            Todos,
        });
    }
    catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "no todos available "
        });
    }
});
exports.AllTodo = AllTodo;
const UpdateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todoid = parseInt(id, 10);
        const updatetodo = yield prisma.todo.update({
            where: {
                id: todoid,
            },
            data: {
                status: {
                    set: !req.body.status,
                }
            }
        });
        res.send({
            success: true,
            message: "updated",
            updatetodo
        });
    }
    catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "no todos available "
        });
    }
});
exports.UpdateTodo = UpdateTodo;
