"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const quotationService_1 = require("../services/quotationService");
const quotation_1 = require("../schemas/public/quotation");
const index = async (req, res, next) => {
    try {
        const data = await (0, quotationService_1.getQuotation)();
        return res.status(200).json({
            message: "Success Get Quotation",
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
        const data = await (0, quotationService_1.getQuotationByUsernamenya)((_a = req.user) === null || _a === void 0 ? void 0 : _a.id_pegawai);
        return res.status(200).json({
            message: "Success Get Quotation",
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
        const validate = quotation_1.insertQuotationSchema.parse(req.body);
        const data = await (0, quotationService_1.createQuotation)(validate);
        return res.status(200).json({
            message: "Success Create Quotation",
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
        const validate = quotation_1.insertQuotationSchema.parse(req.body);
        const data = await (0, quotationService_1.updateQuotation)(validate);
        return res.status(200).json({
            message: "Success Update Quotation",
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
        const data = await (0, quotationService_1.deleteQuotation)(1, 1);
        return res.status(200).json({
            message: "Success Delete Quotation",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
