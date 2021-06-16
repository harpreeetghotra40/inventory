import { testEnvironmentVariable } from '../utils/settings';

export const indexPage = (req, res) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  res.status(200).json({ message: testEnvironmentVariable });
