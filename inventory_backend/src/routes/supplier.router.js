import express from 'express';
import { addSupplier, allSuppliers } from '../controllers/supplier.controller';

const supplierRouter = express.Router();
supplierRouter.get('/', allSuppliers);
supplierRouter.post('/create', addSupplier);

export default supplierRouter;
