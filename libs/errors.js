"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.NotFoundError = void 0;
const NotFoundError = (message) => ({
    name: "NotFoundError",
    message,
});
exports.NotFoundError = NotFoundError;
const ValidationError = (message) => ({
    name: "ValidationError",
    message,
});
exports.ValidationError = ValidationError;
