import { ObjectId } from 'mongodb';

// Require Mongoose
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    userRef: {
      type: ObjectId,
      required: true,
    },
    supplierRef: {
      type: ObjectId,
      default: null,
    },
    name: {
      type: String,
      required: [true, 'Item name is required.'],
      unique: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    warning: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Item = mongoose.model('item', itemSchema);
