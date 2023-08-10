"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const zod_1 = require("zod");
const errorMiddleware = (error, req, res, next) => {
    if (error instanceof zod_1.z.ZodError) {
        // Handle Zod validation errors
        const errorMessage = error.errors.map((err) => err.message).join(", ");
        return res.status(400).json({ error: error });
    }
    else if (error.name === "ValidationError") {
        // Handle validation errors from custom error classes
        return res.status(400).json({ error: error.message });
    }
    else if (error.name === "NotFoundError") {
        // Handle not found errors from custom error classes
        return res.status(404).json({ error: error.message });
    }
    else {
        // Handle other unexpected errors
        console.error("Unhandled error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
exports.errorMiddleware = errorMiddleware;
