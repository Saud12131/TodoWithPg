import express, { Request, Response } from 'express';

import AllRoutes from './AllRoutes';
import cors from 'cors';
const app = express();
const PORT = 5000

const corsOptions = {
    origin: "http://localhost:5173", // Allow requests only from this origin
    methods: "GET,POST,PUT,DELETE",  // Allow specific HTTP methods
    credentials: true,              // Allow cookies or credentials
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("server woring")
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`server listing to port ${PORT}`)
});

app.use("/api/routes", AllRoutes);