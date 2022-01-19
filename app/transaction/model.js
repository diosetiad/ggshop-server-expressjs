const mongoose = require("mongoose");
let transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: { type: String, require: [true, "nama game harus terisi"] },
      category: { type: String, require: [true, "kategori harus terisi"] },
      thumbnail: { type: String },
      coinName: { type: String, require: [true, "nama koin harus terisi"] },
      coinQuantity: {
        type: String,
        require: [true, "jumlah koin harus terisi"],
      },
      price: { type: Number },
    },

    historyPayment: {
      name: { type: String, require: [true, "nama harus terisi"] },
      type: { type: String, require: [true, "tipe pembayaran harus terisi"] },
      bankName: { type: String, require: [true, "nama bank harus terisi"] },
      noRekening: { type: String, require: [true, "nomor rekening terisi"] },
    },

    name: {
      type: String,
      require: [true, "nama harus terisi"],
      maxLength: [225, "panjang nama harus 3 - 255 karakter"],
      minLength: [3, "panjang nama harus 3 - 255 karakter"],
    },

    accountUser: {
      type: String,
      require: [true, "nama akun harus terisi"],
      maxLength: [225, "panjang akun harus 3 - 255 karakter"],
      minLength: [3, "panjang akun harus 3 - 255 karakter"],
    },

    tax: {
      type: Number,
      default: 0,
    },

    value: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },

    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    historyUser: {
      name: { type: String, require: [true, "nama player harus terisi"] },
      phoneNumber: {
        type: Number,
        require: [true, "nomor hp harus terisi"],
        maxLength: [13, "panjang nomor hp harus 9 - 13 karakter"],
        minLength: [9, "panjang nomor hp harus 9 - 13 karakter"],
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
