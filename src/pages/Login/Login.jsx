import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTrue } from '../../slices/loggedInSlice';
import './Login.css';

function Login() {
  const [zodiacSign, setZodiacSign] = useState('');
  const [passwordFruit, setPasswordFruit] = useState('');

  let dispatch = useDispatch();

  const navigate = useNavigate();

  const handleZodiacSignChange = (event) => {
    setZodiacSign(event.target.value);
  };

  const handlePasswordFruitChange = (event) => {
    setPasswordFruit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate successful login (replace this with your actual login logic)
    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      // Dispatch setTrue to update the state
      dispatch(setTrue());
      // Redirect to the Shop page after form submission
      navigate('/shop');
    } else {
      // Handle unsuccessful login
      console.log('Login failed');
    }
  };

  return (
    <div className="login-main-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="zodiacSign">Zodiac Sign:</label>
          <select
            id="zodiacSign"
            value={zodiacSign}
            onChange={handleZodiacSignChange}
          >
            <option value="">Select a zodiac sign</option>
            <option value="aries">Aries</option>
            <option value="taurus">Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="scorpio">Scorpio</option>
            <option value="sagittarius">Sagittarius</option>
            <option value="capricorn">Capricorn</option>
            <option value="aquarius">Aquarius</option>
            <option value="pisces">Pisces</option>
          </select>
        </div>
        <div>
          <label htmlFor="passwordFruit">Select your Password Fruit:</label>
          <select
            id="passwordFruit"
            value={passwordFruit}
            onChange={handlePasswordFruitChange}
          >
            <option value="">Select a fruit</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
