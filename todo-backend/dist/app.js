"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AllRoutes_1 = __importDefault(require("./AllRoutes"));
const app = (0, express_1.default)();
const PORT = 5000;
app.get("/", (req, res) => {
    res.send("server woring");
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`server listing to port ${PORT}`);
});
app.use("/api/routes", AllRoutes_1.default);
