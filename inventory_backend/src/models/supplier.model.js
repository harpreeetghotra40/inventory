// Require Mongoose
const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    budget: {
      type: Number,
    },
    balance: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Supplier = mongoose.model('supplier', supplierSchema);
