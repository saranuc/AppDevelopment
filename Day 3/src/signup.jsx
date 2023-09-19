
import React, { useState } from 'react';
import './signup.css';
import boto from './sign.jpg'
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Signup({  }) {
    const [username, setUsername] = useState('');
  const [secondname, setSecondname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [age, setAge] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    // You can make an API call or add your signup code
    // Once signup is successful, you can close the modal
  };


  return (
    <div>
        <div className="container1">

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
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneno}
            required
            placeholder="Enter your Password"
            onChange={(e) => setPhoneno(e.target.value)}
            />
        </div>
        <div className="input-group">
          <label>Age:</label>
          <input
            type="age"
            value={age}
            required
            placeholder="Enter your Age"
            onChange={(e) => setAge(e.target.value)}
            />
        </div>
      </form>
            </div>
        <div className="button-container">
          <button type="submit">Sign Up</button>
        </div>
        <div >
        <img src={boto} class = "logo" />
        </div>
      <div className='cross'>
      <Link to="/"><FaWindowClose/></Link>
    </div>
    </div>
  )
}
