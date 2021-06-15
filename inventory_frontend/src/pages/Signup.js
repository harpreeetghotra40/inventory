import React, { useState } from 'react';
import { signup } from '../config/Authentication';
import '../styles/authpage.styles.scss';

const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    const register = signup(name, email, password);
    if (register !== null) {
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
                register();
              }}
            >
              <div className="form-label">
                <label htmlFor="Name">Name</label>
              </div>
              <input
                required
                value={name}
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
              />
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
                required
                type="password"
                value={password}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>Create Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
