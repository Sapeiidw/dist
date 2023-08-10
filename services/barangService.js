"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBarangSatuanByIdBarang = exports.getBarangSatuanByIdBarang = exports.deleteBarang = exports.updateBarang = exports.createBarang = exports.getBarangById = exports.getOptionBarang = exports.getBarang = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const barang_1 = require("../schemas/public/barang");
const db_1 = __importDefault(require("../libs/db"));
const barang_satuan_1 = require("../schemas/public/barang_satuan");
const satuan_1 = require("../schemas/public/satuan");
const kategori_barang_1 = require("../schemas/public/kategori_barang");
const brand_1 = require("../schemas/public/brand");
const getBarang = async () => {
    const data = await db_1.default
        .select({
        id: barang_1.barang.id,
        kodeBarang: barang_1.barang.kodeBarang,
        namaBarang: barang_1.barang.namaBarang,
        hargaJual: barang_1.barang.hargaJual,
        hargaBeli: barang_1.barang.hargaBeli,
        idSatuan: barang_1.barang.idSatuan,
        idKategori: barang_1.barang.idKategori,
        status: barang_1.barang.status,
        satuan: satuan_1.satuan.satuan,
        kategoriBarang: kategori_barang_1.kategoriBarang.kategoriBarang,
        brand: brand_1.brand.brand,
        optional: barang_1.barang.optional,
        isStok: barang_1.barang.isStok,
        image: barang_1.barang.images,
        keterangan: barang_1.barang.keterangan,
        // barangSatuan: barangSatuan,
    })
        .from(barang_1.barang)
        .leftJoin(satuan_1.satuan, (0, drizzle_orm_1.eq)(barang_1.barang.idSatuan, satuan_1.satuan.id))
        .leftJoin(kategori_barang_1.kategoriBarang, (0, drizzle_orm_1.eq)(barang_1.barang.idKategori, kategori_barang_1.kategoriBarang.id))
        .leftJoin(brand_1.brand, (0, drizzle_orm_1.eq)(barang_1.barang.idBrand, brand_1.brand.id))
        // .leftJoin(barangSatuan, eq(barang.id, barangSatuan.idBarang))
        .where((0, drizzle_orm_1.eq)(barang_1.barang.status, true))
        .orderBy((0, drizzle_orm_1.asc)(barang_1.barang.namaBarang), (0, drizzle_orm_1.asc)(barang_1.barang.hargaJual));
    return data;
};
exports.getBarang = getBarang;
const getOptionBarang = async () => {
    const data = await db_1.default
        .select({
        id: barang_1.barang.id,
        kode_barang: barang_1.barang.kodeBarang,
        nama_barang: barang_1.barang.namaBarang,
        harga_jual: barang_1.barang.hargaJual,
        id_satuan: barang_1.barang.idSatuan,
    })
        .from(barang_1.barang)
        .where((0, drizzle_orm_1.eq)(barang_1.barang.status, true))
        .where((0, drizzle_orm_1.isNotNull)(barang_1.barang.idSatuan));
    return data;
};
exports.getOptionBarang = getOptionBarang;
const getBarangById = async (params) => {
    const data = await db_1.default.select().from(barang_1.barang).where((0, drizzle_orm_1.eq)(barang_1.barang.id, params));
    return data[0];
};
exports.getBarangById = getBarangById;
const createBarang = async (params) => {
    return db_1.default.transaction(async (tx) => {
        const konversi = params.satuan_data.map((item) => {
            return {
                idBarang: params.id,
                idSatuan: item.id_satuan_kanan,
                konversi: item.konversi,
            };
        });
        const inputWithoutSatuanData = { ...params };
        delete inputWithoutSatuanData.satuan_data;
        const dataBarang = inputWithoutSatuanData;
        await tx.insert(barang_1.barang).values(dataBarang).returning();
        await tx.insert(barang_satuan_1.barangSatuan).values(konversi).returning();
    });
};
exports.createBarang = createBarang;
const updateBarang = async (params) => {
    return db_1.default.transaction(async (tx) => {
        const konversi = params.satuan_data.map((item) => {
            return {
                idBarang: params.id,
                idSatuan: item.id_satuan_kanan,
                konversi: item.konversi,
            };
        });
        const inputWithoutSatuanData = { ...params };
        delete inputWithoutSatuanData.satuan_data;
        const dataBarang = inputWithoutSatuanData;
        await tx
            .update(barang_1.barang)
            .set(dataBarang)
            .where((0, drizzle_orm_1.eq)(barang_1.barang.id, params.id));
        await tx
            .delete(barang_satuan_1.barangSatuan)
            .where((0, drizzle_orm_1.eq)(barang_satuan_1.barangSatuan.idBarang, params.id));
        await tx.insert(barang_satuan_1.barangSatuan).values(konversi).returning();
    });
};
exports.updateBarang = updateBarang;
const deleteBarang = async (id) => {
    const data = await db_1.default.delete(barang_1.barang).where((0, drizzle_orm_1.eq)(barang_1.barang.id, id)).returning();
    return data[0];
};
exports.deleteBarang = deleteBarang;
const getBarangSatuanByIdBarang = async (params) => {
    console.log(params);
    const data = await db_1.default.execute((0, drizzle_orm_1.sql) `SELECT a.id_barang, b.id_satuan as id_satuan_kiri, a.konversi, a.id_satuan as id_satuan_kanan 
    FROM barang_satuan a 
      JOIN barang b on b.id= a.id_barang 
    WHERE a.id_barang=${params}`);
    return data;
};
exports.getBarangSatuanByIdBarang = getBarangSatuanByIdBarang;
const deleteBarangSatuanByIdBarang = async (params) => {
    const data = await db_1.default
        .delete(barang_satuan_1.barangSatuan)
        .where((0, drizzle_orm_1.eq)(barang_satuan_1.barangSatuan.idBarang, params))
        .returning();
    return data[0];
};
exports.deleteBarangSatuanByIdBarang = deleteBarangSatuanByIdBarang;
