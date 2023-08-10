"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const config_1 = __importDefault(require("./libs/config"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // for parsing application/json
app.use(express_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: ["*", config_1.default.CORS], credentials: true }));
app.use("/api", routes_1.routes);
app.route("/").get((req, res) => {
    res.send("Hello World!");
});
// Error handling middleware
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Internal Server Error" });
// });
app.use(errorMiddleware_1.errorMiddleware);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port} 🚀 http://localhost:${port}`);
});
