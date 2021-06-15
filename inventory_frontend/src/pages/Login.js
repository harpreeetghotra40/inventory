import React, { useState } from 'react';
import { signin } from '../config/Authentication';
import '../styles/authpage.styles.scss';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const loginUser = await signin(email, password);
    if (loginUser) {
      props.history.push('/dashboard');
    }
  };

  return (
    <div className="form-container-root">
      <div className="form-container">
        <div className="form-logo-container">Logo</div>
        <div className="formBox">
          <div className="form-header">
            <h2>Sign in to your account</h2>
          </div>
          <div className="base-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                login();
              }}
            >
              <div className="form-label">
                <label htmlFor="email">Email</label>
              </div>
              <input
                required
                type="email"
                value={email}
                placeholder="john@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="form-label">
                <label htmlFor="Password">Password</label>
              </div>
              <input
                id="invalid"
                required
                type="password"
                value={password}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>Continue</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
