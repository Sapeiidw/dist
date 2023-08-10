"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const menuService_1 = require("../services/menuService");
const menu_1 = require("../schemas/public/menu");
const index = async (req, res, next) => {
    try {
        const data = await (0, menuService_1.getMenu)();
        return res.status(200).json({
            message: "Success Get Menu",
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
        const data = await (0, menuService_1.getMenuById)(parseInt(req.params.id));
        return res.status(200).json({
            message: "Success Get Menu",
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
        const validate = menu_1.insertMenuSchema.parse(req.body);
        const data = await (0, menuService_1.createMenu)(validate);
        return res.status(200).json({
            message: "Success Create Menu",
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
        const validate = menu_1.insertMenuSchema.parse(req.body);
        const data = await (0, menuService_1.updateMenu)(validate);
        return res.status(200).json({
            message: "Success Update Menu",
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
        const data = await (0, menuService_1.deleteMenu)(parseInt(req.params.id));
        return res.status(200).json({
            message: "Success Delete Menu",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
