const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const barangScheme = new mongoose.Schema({
  namaBarang: {
    type: String,
  },
  namaUMKM: {
    type: String,
  },
  noHp: {
    type: String,
  },
  alamat: {
    type: String,
  },
  lattitude: {
    type: String,
  },
  longtitude: {
    type: String,
  },
  kategori: {
    type: String,
  },
  gambar: {
    type: String,
  },
  keterangan: {
    type: String,
  },
});

module.exports = mongoose.model("barang", barangScheme);
