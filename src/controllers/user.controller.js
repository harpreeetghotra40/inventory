import { User } from '../models/user.model';

const bcrypt = require('bcryptjs');

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const crypticPass = await bcrypt.hash(password, 10);
  try {
    await User.create({
      name,
      email,
      password: crypticPass,
    });
    res.status(200).json({ status: 'OK' });
  } catch (error) {
    res.status(404).json(error);
  }
};
