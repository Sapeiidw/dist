"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePegawai = exports.updatePegawai = exports.createPegawai = exports.getOptionPegawai = exports.getPegawaiById = exports.getPegawai = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pegawai_1 = require("../schemas/hr/pegawai");
const db_1 = __importDefault(require("../libs/db"));
const jabatan_1 = require("../schemas/hr/jabatan");
const agama_1 = require("../schemas/public/agama");
const departemen_1 = require("../schemas/hr/departemen");
// TODO: Ini kalo di search bermasalah jadi strukturnya harus dibaiki
const getPegawai = async () => {
    const data = await db_1.default
        .select({
        pegawai: pegawai_1.pegawai,
        jabatan: jabatan_1.jabatan.jabatan,
        departemen: departemen_1.departemen.departemen,
        agama: agama_1.agama.agama,
    })
        .from(pegawai_1.pegawai)
        .leftJoin(jabatan_1.jabatan, (0, drizzle_orm_1.eq)(pegawai_1.pegawai.id_jabatan, jabatan_1.jabatan.id))
        .leftJoin(departemen_1.departemen, (0, drizzle_orm_1.eq)(pegawai_1.pegawai.id_departemen, departemen_1.departemen.id_departemen))
        .leftJoin(agama_1.agama, (0, drizzle_orm_1.eq)(pegawai_1.pegawai.id_agama, agama_1.agama.id));
    return data;
};
exports.getPegawai = getPegawai;
const getPegawaiById = async (params) => {
    const data = await db_1.default
        .select()
        .from(pegawai_1.pegawai)
        .where((0, drizzle_orm_1.eq)(pegawai_1.pegawai.id_pegawai, params));
    return data[0];
};
exports.getPegawaiById = getPegawaiById;
const getOptionPegawai = async () => {
    const data = await db_1.default.select({
        id: pegawai_1.pegawai.id_pegawai,
        nama: pegawai_1.pegawai.nama,
        jabatan: pegawai_1.pegawai.id_jabatan,
        departemen: pegawai_1.pegawai.id_departemen
    }).from(pegawai_1.pegawai).where((0, drizzle_orm_1.eq)(pegawai_1.pegawai.status, true));
    return data;
};
exports.getOptionPegawai = getOptionPegawai;
const createPegawai = async (params) => {
    const data = await db_1.default.insert(pegawai_1.pegawai).values(params).returning();
    return data[0];
};
exports.createPegawai = createPegawai;
const updatePegawai = async (params, form) => {
    const data = await db_1.default
        .update(pegawai_1.pegawai)
        .set(form)
        .where((0, drizzle_orm_1.eq)(pegawai_1.pegawai.id_pegawai, params))
        .returning();
    return data[0];
};
exports.updatePegawai = updatePegawai;
const deletePegawai = async (params) => {
    const data = await db_1.default
        .delete(pegawai_1.pegawai)
        .where((0, drizzle_orm_1.eq)(pegawai_1.pegawai.id_pegawai, params))
        .returning();
    return data[0];
};
exports.deletePegawai = deletePegawai;
