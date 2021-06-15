import { SERVICE_URL } from './utils';

export const signup = async (name, email, password) => {
  const fetchReq = await fetch(SERVICE_URL + 'signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  if (fetchReq.status === 500) {
    console.log('Invalid Credentials');
    return null;
  } else {
    const response = await fetchReq.json();
    localStorage.setItem('currentUser', response.token);
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
  if (fetchReq.status === 500) {
    console.log('Invalid Credentials');
    return null;
  } else {
    const response = await fetchReq.json();
    localStorage.setItem('currentUser', response.token);
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
