import React, { useState } from 'react';
import '../css/feedback.css';
import Header from '../Header/Header';
import Sidebar from '../SideBar/SideBar';
import Footer from '../Footer/foot';
import Lottie from 'react-lottie';
import anima from './lottie/Saran.json'

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)}
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Feedback submitted:', feedback);
    // Reset the feedback input field
    setFeedback('');
  };
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const defaultOptions = {
    loop:true,
    autoplay: true,
    animationData: anima,
    rendereSettings:{
      preserveAspectRatio:"xMidYMid slice"
    }
  };
  
  

  return (


    <div>
        <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/* <div className='details'> */}
<div className='boom'>
<div className='lotteb'>
        <Lottie
          options={defaultOptions}
          height={710}
          width={500}
          
        />
       </div>  
       </div>  

    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <div>
          <label>First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
         </div>

          <label>Your Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            cols="50"
            value={feedback}
            onChange={handleFeedbackChange}
            required
            ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer/> 
            </div>
              
  );
}

export default FeedbackForm;
