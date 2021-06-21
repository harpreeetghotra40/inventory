// Require Mongoose
const mongoose = require('mongoose');
import { ObjectId } from 'mongodb';

const supplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
    },
    createrRef: {
      type: ObjectId,
      default: null,
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
