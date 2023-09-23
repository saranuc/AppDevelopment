import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/login.css'
import { login } from './redux/userSlice';
import Popup from './popup/popup';
import animationPata from './lottie/login.json'
import Lottie from 'react-lottie'
import { useUser } from './context/UserContext';

export default function Login() {

    const navigate = useNavigate();  
    const { login: userLogin } = useUser();

  const showMessage = (type, content, url = '', btn = 'Got it') => {
    setMessage({ type, content, url, btn });
    setPopupVisible(true);
};

  const dispatch = useDispatch();

  
  const [formData, setFormData] = useState({
    username: '',
    password: ''
});

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [message, setMessage] = useState({
      type: '',
      content: '',
      url: '',
      btn: ''
  });

const handleGotItClick = () => {
    if (message.url) {
        navigate(message.url);
    }
    setPopupVisible(false);
};
const submitLoginForm = (e) => {
  e.preventDefault();
  const formValues = Object.values(formData);
  if (!formValues.some((value) => !value)) {
      showMessage('success', 'Login successful!', '/side1');
      
      dispatch(login({ username:formData.username }));
  } else {
      showMessage('error', 'Please fill in all fields');
  }
};
const eventHandler = (e) => {
  const { name, value } = e.target;
  setFormData({
      ...formData,
      [name]: value,
  });
};

const defaultOptions = {
  loop:true,
  autoplay: true,
  animationData: animationPata,
  rendereSettings:{
    preserveAspectRatio:"xMidYMid slice"
  }
};

const handlePaste = (e) => {
  e.preventDefault();
  showMessage('error', 'Restricted action');
};


  
  return (
    <div className='lutt'>
      <div className='lotte'>
        <Lottie
          options={defaultOptions}
          height={570}
          width={700}
        />
       </div>    
      <div className="container">
      <h2>LOGIN</h2>
      <h5>Welcome to world of Auction. </h5>
      <form onSubmit={submitLoginForm}>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            required
            placeholder="Enter your username"
            onChange={eventHandler}
            />
          </div>
          <div className="input-group">
          <label>Password:</label>
          <input
          name="password"
            type="password"
            value={formData.password}
            required
            placeholder="Enter your password"
            onChange={eventHandler}
            onPaste={handlePaste} 
          />
        </div>
        {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
        <div className='button-container12'>
          <button type="submit">Login</button>
        </div>
      </form>
      </div>
      <div className='fi'>
      Don't have an account?
      <Link to="/up" type="submit"> Sign Up</Link>
      </div>
      </div>
  );
}
