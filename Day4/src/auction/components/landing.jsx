import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/landing.css';
import { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import wemo from '../women.png';

export default function Landing() {
    const navigate = useNavigate();
    const loginEvent = () => {
        navigate('/login');
    }
       
  return (
    <div>
           <h1 className='topic'>
            | BIDBUDDY 
           </h1>
           <h2 className='sub-topic'>
             India's No#1 Discount Auction Bidding Platform
           </h2>
            <h4 className='heading1'>Welcome to the Auction world 👍❤️</h4>
            <button className='login_btn1' onClick={loginEvent}>Login</button>
            <h4 className='bottom-topic'>
              Please Login to Continue.🙌
            </h4>
            <div className='women'>
              {/* <img src={wemo}></img> */}
            </div>
            <div className='para'>
              <ul>
            <li>
              100% RISKFREE ONLINE AUCTIONS, WIN or BUY BRANDED NEW PRODUCTS AT UP TO 89% HUGE DISCOUNT
            </li> 
           <li>
              5 Free Credits On Sign Up, Worldwide Shipping , Latest Gadgets, Click To BID Easy Auctions
            </li>
             <li className='content 3'>
            60000+ Members , 15000+ Completed Auctions , Always Fair Auction Guaranteed.
            </li>
              </ul>
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
    </div>
  )
}


