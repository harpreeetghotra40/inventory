import { SERVICE_URL } from './utils';

export const signup = async (name, email, password) => {
  const fetchReq = await fetch(SERVICE_URL + 'signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
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

export const signin = async (email, password) => {
  const fetchReq = await fetch(SERVICE_URL + 'signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
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

export const isAuthenticated = () => {
  const item = localStorage.getItem('currentUser');
  if (item === null || item === undefined || item === 'undefined') {
    console.log('Authentication: No user logged in.');
    return null;
  }
  return item;
};

export const logout = () => {
  localStorage.clear();
  return null;
};
