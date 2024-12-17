import express, { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const CreateTodo = async (req: Request, res: Response) => {
    try {
        const { title, status } = req.body;
        const NewTodo = await prisma.todo.create({
            data: {
                title: title,
                status: status,
            }
        });
        res.send({
            success: true,
            message: "new todo created"
        });
    } catch (err) {
        console.log(err);

        res.send({
            success: false,
            message: "unable to create new todo "
        });
    }

}

const DeleteTodo = async (req: Request, res: Response) => {
    try {
        let { id } = req.params;
        const todoId = parseInt(id, 10);
        const todo = await prisma.todo.delete({
            where: {
                id: todoId,
            }
        })
        res.send({
            success: true,
            message: "todo Deleted",
            todo,
        });
        console.log(id);

    } catch (err) {
        console.log(err);

        res.send({
            success: false,
            message: "unable to delete  todo "
        });
    }

}

const AllTodo = async (req: Request, res: Response) => {
    try {
        const Todos = await prisma.todo.findMany({});
        res.send({
            success: true,
            Todos,
        });
    } catch (err) {
        console.log(err);

        res.send({
            success: false,
            message: "no todos available "
        });
    }

}

const UpdateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const todoid = parseInt(id, 10);
        const updatetodo = await prisma.todo.update({
            where: {
                id: todoid,
            },
            data: {
                status:{
                    set:!req.body.status,
                }
            }
        });

        res.send({
            success: true,
            message: "updated",
            updatetodo
        });
    } catch (err) {
        console.log(err);

        res.send({
            success: false,
            message: "no todos available "
        });
    }

}

export { CreateTodo, AllTodo, DeleteTodo, UpdateTodo };