import { SERVICE_URL } from './utils';

export const addItemToInventory = async ({
  name,
  supplierRef,
  stock,
  warning,
  price,
}) => {
  const fetchReq = await fetch(SERVICE_URL + '/api/items/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('currentUser'),
    },
    body: JSON.stringify({ name, supplierRef, stock, warning, price }),
  });
  const response = await fetchReq.json();
  if (response.message) {
    console.log('Invalid Credentials');
    return null;
  } else {
    localStorage.setItem('currentUser', response.token);
    return response.token;
  }
};
