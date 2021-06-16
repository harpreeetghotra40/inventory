import { reduceRight } from 'lodash';
import { Item } from '../models/item.model';

// create item
export const addItem = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ message: 'Name of item required' });
  }
  console.log(req.user);
  try {
    const item = await Item.create({
      userRef: req.user._id,
      name: req.body.name,
      quantity: req.body.quantity ?? 0,
      price: req.body.price ?? 0,
      warning: req.body.warning ?? 0,
    });
    return res.status(200).json(item);
  } catch (e) {
    return res.status(500).end();
  }
};

// read item
export const readItem = async (req, res) => {
  try {
    const items = await Item.find({ userRef: req.user._id });
    return res.status(200).json(items);
  } catch (e) {
    return res.status(500).end();
  }
};

// Update Item
export const updateItem = async (req, res) => {
  const itemInQuestion = await Item.findById(req.body.itemId);
  try {
    const itemToBeUpdated = await Item.findOneAndUpdate(
      { _id: req.body.itemId },
      {
        $set: {
          quantity: req.body.quantity ?? itemInQuestion.quantity,
          price: req.body.price ?? itemInQuestion.price,
          warning: req.body.warning ?? itemInQuestion.warning,
          supplierRef: req.body.supplierRef ?? itemInQuestion.supplierRef,
        },
      },
      { new: true }
    );
    return res.status(200).json(itemToBeUpdated);
  } catch (error) {
    res.status(500).end();
  }
};

// delete item
export const deleteItem = async (req, res) => {
  try {
    const itemToBeDeleted = await Item.findById(req.body.itemId);
    if (itemToBeDeleted.userRef.toString() == req.user._id.toString()) {
      console.log('deleting item');
      await Item.deleteOne({ _id: itemToBeDeleted._id });
    }
    return res.status(200).json(itemToBeDeleted);
  } catch (e) {
    return res.status(500).end();
  }
};
