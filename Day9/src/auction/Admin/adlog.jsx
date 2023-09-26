import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/admin.css'
import { login } from '../components/redux/userSlice';
import Popup from '../components/popup/popup'
import animationPata from '../components/lottie/adminlogin.json'
import Lottie from 'react-lottie'
import { useUser } from '../components/context/UserContext';

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
      showMessage('success', 'Login successful!', '/admin/dash');
      
      dispatch(login({ username:formData.username }));
      // dispatch(login({ password:formData.password }));
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
      <div className='luttb'>
        <div className='lotte'>
          <Lottie
            options={defaultOptions}
            height={520}
            width={770}
          />
        </div>    
        <div className="container">
        <h2>ADMIN</h2>
        <h5>Welcome Back !. </h5>
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
        </div>
  );
}
