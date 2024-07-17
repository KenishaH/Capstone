import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  lastName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  phoneNumber: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  email: {
    type: String,
    required: true
  },
  dogName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  dogBreed: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  dogColor: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  contactName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  contactNumber: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  service: [String]
});

const Owner = mongoose.model("Owner", ownerSchema);

export default Owner;
