"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionRoute = void 0;
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const optionController_1 = require("../controllers/optionController");
const router = (0, express_1.Router)();
exports.optionRoute = router;
router.get("/atasan-jabatan", authMiddleware_1.auth, optionController_1.getJabatanAtasan);
