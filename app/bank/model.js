const mongoose = require("mongoose");
let bankSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Nama pemilik harus terisi"],
    },
    bankName: {
      type: String,
      require: [true, "Nama bank harus terisi"],
    },
    noRekening: {
      type: String,
      require: [true, "Nomor rekening harus terisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bank", bankSchema);
