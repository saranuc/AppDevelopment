
import React, { useState } from 'react';
import '../css/signup.css'
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './lottie/signup.json'

export default function Signup() {
    const [username, setUsername] = useState('');
  const [secondname, setSecondname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [age, setAge] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

  };
  const defaultOptions = {
    loop:true,
    autoplay: true,
    animationData: animationData,
    rendereSettings:{
      preserveAspectRatio:"xMidYMid slice"
    }
  };


  return (
    <div className='lot'>
    <div className='lottie'>
        <Lottie
          options={defaultOptions}
          height={610}
          width={790}
          />
    </div>
        <div className="container2">
       <h2>Sign Up</h2>
       <form onSubmit={handleSignUp}>
       <div className="input-group">
          <label>First Name:</label>
          <input
            type="email"
            value={username}
            required
            placeholder="Enter your FirstName"
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="input-group">
          <label>Second Name:</label>
          <input
            type="text"
            value={secondname}
            required
            placeholder="Enter your SecondName"
            onChange={(e) => setSecondname(e.target.value)}
            />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            required
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={age}
            required
            placeholder="Enter your Password"
            onChange={(e) => setAge(e.target.value)}
            />
        </div>
        <div className="input-group">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneno}
            required
            placeholder="Enter your PhoneNo"
            onChange={(e) => setPhoneno(e.target.value)}
            />
        </div>
        <div className="button-container">
          <button type="submit">Sign Up</button>
        </div>
      <div className='cross'>
      <Link to="/"><FaWindowClose/></Link>
    </div>
  </form>
            </div>
    </div>
  )
}
