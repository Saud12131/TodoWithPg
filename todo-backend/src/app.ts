import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import AllRoutes from './AllRoutes';
const app = express();
const PORT = 5000

app.get("/", (req, res) => {
    res.send("server woring")
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`server listing to port ${PORT}`)
});

app.use("/api/routes",AllRoutes);