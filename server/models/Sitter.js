import mongoose from "mongoose";

const sitterSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    enum: []
  },
  email: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const sitter = mongoose.model("Sitter", sitterSchema);

export default sitter;
