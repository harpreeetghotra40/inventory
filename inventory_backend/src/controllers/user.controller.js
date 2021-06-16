import { User } from '../models/user.model';

// const bcrypt = require('bcryptjs');

// export const register = async (req, res) => {
//   const { name, email, password } = req.body;
//   const crypticPass = await bcrypt.hash(password, 10);
//   try {
//     await User.create({
//       name,
//       email,
//       password: crypticPass,
//     });
//     res.status(200).json({ status: 'OK' });
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };

// export const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const findUser = await User.findOne({ email });
//     console.log(findUser);
//     bcrypt.compare(password, findUser.password, (err, result) => {
//       if (result) {
//         res.status(200).json({ status: findUser._id });
//       } else {
//         res.json({ status: 'user not found' });
//       }
//     });
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };
