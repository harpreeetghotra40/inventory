/* eslint-disable import/named */
import express from 'express';
import {
  addItem,
  deleteItem,
  updateItem,
  readItem,
} from '../controllers/item.controller';

const itemRouter = express.Router();

itemRouter.get('/', readItem);
itemRouter.post('/create', addItem);
itemRouter.post('/delete', deleteItem);
itemRouter.post('/update', updateItem);

export default itemRouter;
