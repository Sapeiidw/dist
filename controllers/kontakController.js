"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const kontakService_1 = require("../services/kontakService");
const kontak_1 = require("../schemas/public/kontak");
const index = async (req, res, next) => {
    try {
        const data = await (0, kontakService_1.getKontak)();
        return res.status(200).json({
            message: "Success Get Kontak",
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
        const data = await (0, kontakService_1.getKontakById)(parseInt(req.params.id));
        return res.status(200).json({
            message: "Success Get Kontak",
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
        const validate = kontak_1.insertKontakSchema.parse(req.body);
        const data = await (0, kontakService_1.createKontak)(validate);
        return res.status(200).json({
            message: "Success Create Kontak",
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
        const validate = kontak_1.insertKontakSchema.parse(req.body);
        const data = await (0, kontakService_1.updateKontak)(parseInt(req.body.id), validate);
        return res.status(200).json({
            message: "Success Update Kontak",
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
        const data = await (0, kontakService_1.deleteKontak)(1);
        return res.status(200).json({
            message: "Success Delete Kontak",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
