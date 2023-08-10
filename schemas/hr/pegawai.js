"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertPegawaiSchema = exports.pegawai = exports.hr = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
exports.hr = (0, pg_core_1.pgSchema)("hr");
exports.pegawai = exports.hr.table("pegawai", {
    id_pegawai: (0, pg_core_1.serial)("id").primaryKey(),
    nama: (0, pg_core_1.varchar)("nama", { length: 256 }).notNull(),
    hp: (0, pg_core_1.varchar)("hp", { length: 256 }),
    hp2: (0, pg_core_1.varchar)("hp2", { length: 256 }),
    hp3: (0, pg_core_1.varchar)("hp3", { length: 256 }),
    email: (0, pg_core_1.varchar)("email", { length: 256 }),
    wa: (0, pg_core_1.varchar)("wa", { length: 50 }),
    status: (0, pg_core_1.boolean)("status"),
    nama_panggilan: (0, pg_core_1.varchar)("nama_panggilan", { length: 256 }),
    tempat_lahir: (0, pg_core_1.varchar)("tempat_lahir", { length: 100 }),
    tanggal_lahir: (0, pg_core_1.date)("tanggal_lahir"),
    jenis_kelamin: (0, pg_core_1.varchar)("jenis_kelamin", { length: 1 }),
    status_pernikahan: (0, pg_core_1.varchar)("status_pernikahan", { length: 20 }),
    golongan_darah: (0, pg_core_1.varchar)("golongan_darah", { length: 2 }),
    nik_ktp: (0, pg_core_1.varchar)("nik_ktp", { length: 25 }),
    alamat_ktp: (0, pg_core_1.text)("alamat_ktp"),
    kodepos_ktp: (0, pg_core_1.varchar)("kodepos_ktp", { length: 10 }),
    provinsi_ktp: (0, pg_core_1.varchar)("provinsi_ktp", { length: 100 }),
    kabupaten_ktp: (0, pg_core_1.varchar)("kabupaten_ktp", { length: 100 }),
    alamat_sama: (0, pg_core_1.boolean)("alamat_sama"),
    alamat_domisili: (0, pg_core_1.text)("alamat_domisili"),
    kodepos_domisili: (0, pg_core_1.varchar)("kodepos_domisili", { length: 10 }),
    provinsi_domisili: (0, pg_core_1.varchar)("provinsi_domisili", { length: 100 }),
    kabupaten_domisili: (0, pg_core_1.varchar)("kabupaten_domisili", { length: 100 }),
    id_agama: (0, pg_core_1.integer)("id_agama"),
    tinggi_badan: (0, pg_core_1.numeric)("tinggi_badan"),
    berat_badan: (0, pg_core_1.numeric)("berat_badan"),
    anak_ke: (0, pg_core_1.varchar)("anak_ke", { length: 10 }),
    nip: (0, pg_core_1.varchar)("nip", { length: 50 }),
    mulai_bekerja: (0, pg_core_1.date)("mulai_bekerja"),
    pkwt: (0, pg_core_1.date)("pkwt"),
    is_hd: (0, pg_core_1.boolean)("is_hd"),
    absen: (0, pg_core_1.integer)("absen"),
    status_karyawan: (0, pg_core_1.varchar)("status_karyawan"),
    nomor_rekening: (0, pg_core_1.varchar)("nomor_rekening", { length: 50 }),
    fotonya: (0, pg_core_1.varchar)("fotonya", { length: 256 }),
    aktifasi_umt: (0, pg_core_1.date)("aktifasi_umt"),
    aktifasi_kehadiran: (0, pg_core_1.date)("aktifasi_kehadiran"),
    is_new: (0, pg_core_1.boolean)("is_new"),
    pemilik_rekening: (0, pg_core_1.varchar)("pemilik_rekening", { length: 256 }),
    is_driver: (0, pg_core_1.boolean)("is_driver"),
    id_kantor: (0, pg_core_1.integer)("id_kantor"),
    id_departemen: (0, pg_core_1.integer)("id_departemen"),
    id_jabatan: (0, pg_core_1.integer)("id_jabatan"),
    atasan_langsung: (0, pg_core_1.integer)("atasan_langsung"),
    id_site: (0, pg_core_1.integer)("id_site"),
    id_level: (0, pg_core_1.integer)("id_level"),
    ttd: (0, pg_core_1.varchar)("ttd", { length: 256 }),
    jabatan_penawaran: (0, pg_core_1.varchar)("jabatan_penawaran", { length: 256 }),
});
exports.insertPegawaiSchema = (0, drizzle_zod_1.createInsertSchema)(exports.pegawai);
