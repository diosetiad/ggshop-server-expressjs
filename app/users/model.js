const mongoose = require("mongoose");
let userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "email harus terisi"],
    },
    name: {
      type: String,
      require: [true, "nama harus terisi"],
    },
    password: {
      type: String,
      require: [true, "password harus terisi"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    phoneNumber: {
      type: String,
      require: [true, "nomor hp harus terisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
