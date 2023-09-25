import React, { useState } from 'react'
import Header from '../Header/Adminheader'
import Sidebar from '../SideBar/Adminsidebar'
import Footer from '../Footer/foot';
import '../css/adminproduct.css'
import { login } from '../components/redux/userSlice';
import animationPata from '../components/lottie/addpro.json'
import { useDispatch } from 'react-redux';
import Lottie from 'react-lottie';
import addNotification from 'react-push-notification';


export default function Adminuser() {

    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
        };

    const [formData, setFormData] = useState({
        productname: '',
        AuctionId: '',
        Time:'',
        price:'',
        biddername:''
        
    });
    const eventHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
      };

      const [isPopupVisible, setPopupVisible] = useState(false);
      const [message, setMessage] = useState({
          type: '',
          content: '',
          url: '',
          btn: ''
      });

      const dispatch = useDispatch();
      
      const submitLoginForm = (e) => {
        e.preventDefault();
        const formValues = Object.values(formData);
        if (!formValues.some((value) => !value)) {
            showMessage('success', 'Login successful!', );
            
            dispatch(login({ username:formData.username }));
            // dispatch(login({ password:formData.password }));
        } else {
            showMessage('error', 'Please fill in all fields');
        }
      };
      const showMessage = (type, content, url = '', btn = 'Got it') => {
        setMessage({ type, content, url, btn });
        setPopupVisible(true);
    };

    const defaultOptions = {
      loop:true,
      autoplay: true,
      animationData: animationPata,
      rendereSettings:{
        preserveAspectRatio:"xMidYMid slice"
      }
    };
  return (
    <div>
        <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/* <Footer /> */}
      <div className='lutt1'>
      <div className='lotte1'>
          <Lottie
            options={defaultOptions}
            height={510}
            width={700}
          />
      </div>
        <div className="container-saran">
        <h2>ADD PRODUCTS</h2>

        <form onSubmit={submitLoginForm}>
  <div className="input-group">
    <label>Product Name:</label>
    <input
      type="text"
      name="productname" 
      value={formData.productname}
      required
      placeholder="Enter the product name"
      onChange={eventHandler}
    />
  </div>
  <div className="input-group">
    <label>Auction ID:</label>
    <input
      name="AuctionId" 
      type="text"
      value={formData.AuctionId}
      required
      placeholder="Enter your Auction ID"
      onChange={eventHandler}
    />
  </div>
  <div className='input-group'>
              <label>Time:</label>
              <input
                name='Time'
                type='text'
                value={formData.Time}
                required
                placeholder='Enter your Starting time'
                onChange={eventHandler}
              />
            </div>
            <div className='input-group'>
              <label>Bidding Price:</label>
              <input
                name='price'
                type='text'
                value={formData.price}
                required
                placeholder='Enter your Estimated price'
                onChange={eventHandler}
              />
            </div>
            <div className='input-group'>
              <label>Bidder Name:</label>
              <input
                name='biddername'
                type='text'
                value={formData.biddername}
                required
                placeholder='Enter the Bidder Name'
                onChange={eventHandler}
              />
            </div>
          {/* {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />} */}
          <div className='button-container22'>
            <button type='submit' >ADD</button>
          </div>
        </form>
        </div>
        </div>
      
       </div>    
      )
}
