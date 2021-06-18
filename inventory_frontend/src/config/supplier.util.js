import { SERVICE_URL, headerObject } from './utils';

export const getAllSuppliers = async () => {
  const fetchReq = await fetch(SERVICE_URL + 'api/suppliers', {
    method: 'GET',
    headers: headerObject,
  });
  const response = await fetchReq.json();
  if (response.message) {
    console.log('Invalid Credentials');
    return null;
  }
  return response;
};

export const addSupplier = async (name, address, phone, budget, balance) => {
  const fetchReq = await fetch(SERVICE_URL + 'api/suppliers/create', {
    method: 'POST',
    headers: headerObject,
    body: JSON.stringify({ name, address, phone, budget, balance }),
  });
  const response = await fetchReq.json();
  if (response.message) {
    console.log('Invalid Credentials');
    return null;
  }
  return response;
};
