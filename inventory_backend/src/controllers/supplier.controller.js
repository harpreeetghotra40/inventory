import { Supplier } from '../models/supplier.model';

//get all suppliers
export const allSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find()
      .select('-createdAt')
      .select('-updatedAt');
    return res.status(200).json(suppliers);
  } catch (e) {
    return res.status(500).end();
  }
};

// create supplier
export const addSupplier = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ message: 'Name of Supplier required' });
  }
  try {
    const supplier = await Supplier.create({
      name: req.body.name,
      createrRef: req.user._id ?? null,
      address: req.body.address ?? 'unknown',
      phone: req.body.phone ?? 'unknown',
      budget: req.body.budget ?? 0,
      balance: req.body.balance ?? 0,
    });
    return res.status(200).json(supplier);
  } catch (e) {
    return res.status(500).end();
  }
};
