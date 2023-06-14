import React from 'react';
import './SignIn.css';
import {useState} from 'react';
import FacebookLogin from './FacebookLogin';



const SignIn = () => {
  const [enteredEmail, setEnteredEmail] =useState('');
  const [enteredPassword, setEnteredPassword] =useState('');
  const [enteredValidEmail, setEnteredValidEmail] =useState(true);
  const [enteredValidPassword, setEnteredValidPassword] =useState(true);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredPassword(e.target.value)
    setEnteredEmail(e.target.value)

    if(enteredPassword.length < 6){
      setEnteredValidPassword(false)
    }

    if(!enteredEmail.includes('@')){
      setEnteredValidEmail(false)
    }
  }


  return (
    <>
      <div className='background-signin'>
        <div className='sign-in'>
          <h1>Welcome to Jewelery</h1>
        <div>
          <form onSubmit={formSubmitHandler}>
            <input type="email" name='email' placeholder="Email" className={enteredValidPassword ? '' : 'error'} ></input><br />
            {!enteredValidEmail && <p className='error-message'>Email is not valid</p>}
            <input type="password" name='password' placeholder="Password" className={enteredValidPassword ? '' : 'error'}></input><br />
            {!enteredValidPassword && <p className='error-message' >Password is not valid</p>}
            <button style ={{backgroundColor: '#DAA06D'}}>Log in</button><br />
          </form>
          <div className="or">
            <p>or</p>
          </div>
          <FacebookLogin />


          <button style ={{backgroundColor: '#E32636'}}>Sign in with Google+ </button> <br />
        </div>
       </div>
      </div>

    </>
  )
}

export default SignIn;
