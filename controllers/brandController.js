"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const brandService_1 = require("../services/brandService");
const brand_1 = require("../schemas/public/brand");
const index = async (req, res, next) => {
    try {
        const data = await (0, brandService_1.getBrand)();
        return res.status(200).json({
            message: "Success Get Brand",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.index = index;
const show = async (req, res, next) => {
    var _a;
    try {
        const data = await (0, brandService_1.getBrandById)((_a = req.user) === null || _a === void 0 ? void 0 : _a.id_pegawai);
        return res.status(200).json({
            message: "Success Get Brand",
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
        const validate = brand_1.insertBrandSchema.parse(req.body);
        const data = await (0, brandService_1.createBrand)(validate);
        return res.status(200).json({
            message: "Success Create Brand",
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
        const validate = brand_1.insertBrandSchema.parse(req.body);
        const data = await (0, brandService_1.updateBrand)(validate);
        return res.status(200).json({
            message: "Success Update Brand",
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
        const data = await (0, brandService_1.deleteBrand)(1);
        return res.status(200).json({
            message: "Success Delete Brand",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
