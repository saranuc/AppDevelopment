import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../css/landing.css';
import { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter ,BsFacebook} from 'react-icons/bs';
import wemo from '../women.png';
import Footer from '../Footer/foot';
import ani from './lottie/home.json'
import Lottie from 'react-lottie';
import { Line } from 'recharts';

export default function Landing() {
    const navigate = useNavigate();
    const loginEvent = () => {
        navigate('/login');
    }
    const defaultOptions = {
      loop:true,
      autoplay: true,
      animationData: ani,
      rendereSettings:{
        preserveAspectRatio:"xMidYMid slice"
      }
    };
    
       
  return (
    <div>
     
           <h1 className='topic'>
            | BIDBUDDY 
           </h1>
            <h4 className='heading1'>Welcome to the Auction world 👍❤️</h4>
            <h4 className='bottom-topic'>
              Please Login to Continue.🙌
            </h4>
            <div className='manjal'>
            <button className='login1' onClick={loginEvent}>Get Started</button>
        </div>
           <h2 className='sub-topic'>
             <pr></pr>India's No#1 Discount Auction Bidding Platform
           </h2>
      <div className='lotte'>
        <Lottie
          options={defaultOptions}
          height={370}
          width={700}
        />
       </div>   
            <div className='women'>
              <img src={wemo}></img>
            </div>
            <div className='poto'>
              <img src={"https://www.bidderboy.com/images/infographic.png"}></img>
            </div>
            <div className='tick'>
              <div className='slogan'>
                <TiTick/>
                Only Brand New Products
              </div>
              <div className='slogan1'>
                <TiTick/>
                No Auction Reserve Price
              </div>
              <div className='slogan2'>
                <TiTick/>
                Free of Charge Returns
              </div>
              <div className='slogan3'>
                <TiTick/>
                Buy-Now Discounts Assured
              </div>
              <div className='slogan4'>
                <TiTick/>
                Safe Payment Gateways
              </div>
            </div>
            
            <div className='social'>
              <div className='insta'>
                    <Link to="https://www.instagram.com/?next=%2F&hl=en"><AiFillInstagram/></Link>
              </div>
              <div className='twiter'>
                    <Link to="https://twitter.com/?lang=en-in"><BsTwitter/></Link>
              </div>
              <div className='fb'>
                <Link to="https://www.facebook.com"><BsFacebook/></Link>
              </div>
            </div>
            <div className='lot'>
      </div>
            <Footer/>
    </div>
  )
}


