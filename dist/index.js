"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const blogRoute_1 = __importDefault(require("./routes/blogRoute"));
const commentRoute_1 = __importDefault(require("./routes/commentRoute"));
const cors_1 = __importDefault(require("cors"));
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const app = express_1.default();
app.use(cookieParser());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default({
    origin: "https://blog-frontend-3dlzoowa7-yash7426.vercel.app", credentials: true
}));
const PORT = 5000;
app.get("/", (req, res) => {
    return res.send("Hi there");
});
app.use("/api/users", userRoute_1.default);
app.use("/api/blogs", blogRoute_1.default);
app.use("/api/comments", commentRoute_1.default);
app.use(errorMiddleware_1.errorHandler);
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
