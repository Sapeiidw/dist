"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJabatanAtasan = void 0;
const optionService_1 = require("../services/optionService");
const getJabatanAtasan = async (req, res, next) => {
    try {
        const data = await (0, optionService_1.getOptionJabtanAtasan)();
        return res.status(200).json({
            message: "Success Get Atasan Jabatan",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getJabatanAtasan = getJabatanAtasan;
