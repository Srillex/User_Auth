import axios from 'axios';

const API_KEY = 'AIzaSyB8S4t-UIwPFxvI_0ZZj-1z84_bfzpB0OA';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
