// Require Mongoose
const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
    },
    phone: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Supplier = mongoose.model('user', supplierSchema);
