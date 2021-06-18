export const SERVICE_URL = 'http://localhost:3000/';

export const headerObject = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + localStorage.getItem('currentUser'),
};
