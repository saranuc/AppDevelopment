import React from 'react'
import { Link } from 'react-router-dom'
import 
 { BsPersonCircle,BsJustify}
 from 'react-icons/bs'
import "../css/header.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../components/redux/userSlice';
import { RiAuctionFill } from 'react-icons/ri';
function Header({OpenSidebar}) {

  const user=useSelector(selectUser);
  const username =user.user && user.user.username?user.user.username:'Guest';
  //console.log(user.username)
  return (
    <header className='header'>
        <div className='menu-icon'>
            <RiAuctionFill className='icon' onClick={OpenSidebar}/>
            BIDBUDDY
        </div>
        <div className='n'>

        <Link to="/"> Home</Link>
        <Link to="/about">About us</Link>
        </div>
        <div className='user-name'>
            {user.username}
        </div>
        <div className='header-right'>
            <BsPersonCircle className='icon' />
        </div>
    </header>
  )
}
export default Header