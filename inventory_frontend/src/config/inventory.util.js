import { SERVICE_URL, headerObject } from './utils';

export const addItemToInventory = async (
  name,
  supplier,
  stock,
  warning,
  price
) => {
  const supplierRef = supplier;
  const fetchReq = await fetch(SERVICE_URL + 'api/items/create', {
    method: 'POST',
    headers: headerObject,
    body: JSON.stringify({ name, supplierRef, stock, warning, price }),
  });
  const response = await fetchReq.json();
  if (response.message) {
    console.log('Invalid Credentials');
    return null;
  } else {
    return response;
  }
};

export const getAllItems = async () => {
  const fetchReq = await fetch(SERVICE_URL + 'api/items', {
    method: 'GET',
    headers: headerObject,
  });
  const response = await fetchReq.json();
  if (response.message) {
    console.log('Invalid Credentials');
    return null;
  } else {
    return response;
  }
};
