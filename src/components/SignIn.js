import React from 'react';
import './SignIn.css';
import { useState } from 'react';
import FacebookLogin from './FacebookLogin';
// import AdminPanel from '../components/AdminPanel/AdminPanel';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValidEmail, setEnteredValidEmail] = useState(true);
  const [enteredValidPassword, setEnteredValidPassword] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setEnteredPassword(e.target.password.value);
    setEnteredEmail(e.target.email.value);

    if (enteredPassword.length < 6) {
      setEnteredValidPassword(false);
    }

    if (!enteredEmail.includes('@')) {
      setEnteredValidEmail(false);
    }

   let email = e.target.email.value;
   let password = e.target.password.value;
    loginHandler(email, password)
  };

  const loginHandler = (email, password) => {

    // console.log(email, password)
    if (
      email === 'admin@gmail.com' &&
      password === 'admin12345'
    ) {
      console.log('admin')
      setIsLoggedIn(true);
      setIsAdmin(true);
      navigate('/admin');
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
      navigate('/moreItem');
    }
  };

  return (
    <>
      <div className="background-signin">
        <div className="sign-in">
          <h1>Welcome to Jewelry</h1>
          <div>
            <form onSubmit={formSubmitHandler}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={enteredValidPassword ? '' : 'error'}
              ></input>
              <br />
              {!enteredValidEmail && (
                <p className="error-message">Email is not valid</p>
              )}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={enteredValidPassword ? '' : 'error'}
              ></input>
              <br />
              {!enteredValidPassword && (
                <p className="error-message">Password is not valid</p>
              )}
              <button
              type='submit'
                style={{ backgroundColor: '#DAA06D' }}
                // onClick={loginHandler}
              >
                Log in
              </button>
              <br />
            </form>
            <div className="or">
              <p>or</p>
            </div>
            <FacebookLogin />

            <button style={{ backgroundColor: '#E32636' }}>
              Sign in with Google+
            </button>{' '}
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
