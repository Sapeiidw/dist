"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kategoriKontakRoute = void 0;
const express_1 = require("express");
const kategoriKontakController_1 = require("../controllers/kategoriKontakController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
exports.kategoriKontakRoute = router;
router.get("/", authMiddleware_1.auth, kategoriKontakController_1.index);
router.get("/:id", authMiddleware_1.auth, kategoriKontakController_1.show);
router.post("/", authMiddleware_1.auth, kategoriKontakController_1.store);
router.patch("/:id", authMiddleware_1.auth, kategoriKontakController_1.update);
router.delete("/:id", authMiddleware_1.auth, kategoriKontakController_1.destroy);