"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const departemenService_1 = require("../services/departemenService");
const departemen_1 = require("../schemas/hr/departemen");
const index = async (req, res, next) => {
    try {
        const data = await (0, departemenService_1.getDepartemen)();
        return res.status(200).json({
            message: "Success Get Departemen",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.index = index;
const show = async (req, res, next) => {
    try {
        const data = await (0, departemenService_1.getDepartemenById)(parseInt(req.params.id_departemen));
        return res.status(200).json({
            message: "Success Get Departemen",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.show = show;
const store = async (req, res, next) => {
    try {
        const validate = departemen_1.insertDepartemenSchema.parse(req.body);
        const data = await (0, departemenService_1.createDepartemen)(validate);
        return res.status(200).json({
            message: "Success Create Departemen",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.store = store;
const update = async (req, res, next) => {
    try {
        const validate = departemen_1.insertDepartemenSchema.parse(req.body);
        const data = await (0, departemenService_1.updateDepartemen)(validate);
        return res.status(200).json({
            message: "Success Update Departemen",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.update = update;
const destroy = async (req, res, next) => {
    try {
        const data = await (0, departemenService_1.deleteDepartemen)(parseInt(req.params.id_departemen));
        return res.status(200).json({
            message: "Success Delete Departemen",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
