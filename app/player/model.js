const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const HASH_ROUND = 10;

let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "email harus terisi"],
    },
    name: {
      type: String,
      require: [true, "nama harus terisi"],
      maxLength: [255, "panjang nama harus 9 - 255 karakter"],
      minLength: [3, "panjang nama harus 3 - 255 karakter"],
    },
    username: {
      type: String,
      require: [true, "username harus terisi"],
      maxLength: [255, "panjang username harus 9 - 255 karakter"],
      minLength: [3, "panjang username harus 3 - 255 karakter"],
    },
    password: {
      type: String,
      require: [true, "password harus terisi"],
      maxLength: [255, "panjang password harus 9 - 255 karakter"],
      minLength: [3, "panjang password harus 3 - 255 karakter"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    avatar: {
      type: String,
      fileName: { type: String },
    },
    phoneNumber: {
      type: String,
      require: [true, "nomor hp harus terisi"],
      maxLength: [13, "panjang nomor hp harus 9 - 13 karakter"],
      minLength: [9, "panjang nomor hp harus 9 - 13 karakter"],
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

playerSchema.path("email").validate(
  async function (value) {
    try {
      const count = await this.model("Player").countDocuments({ email: value });

      return !count;
    } catch (err) {
      throw err;
    }
  },
  (attr) => `${attr.value} sudah terdaftar`
);

playerSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, HASH_ROUND);
  next();
});

module.exports = mongoose.model("Player", playerSchema);
