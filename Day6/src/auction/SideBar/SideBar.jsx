import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { BsFillArchiveFill}from 'react-icons/bs'
 import { RiAuctionFill } from 'react-icons/ri';
 import { CiLogout } from 'react-icons/ci';
 import { VscFeedback } from 'react-icons/vsc';
 import { BiDetail } from 'react-icons/bi';
 import { GiPodiumWinner } from 'react-icons/gi';
 import { logout } from '../components/redux/userSlice';
import "../css/side.css"
import { useUser } from '../components/context/UserContext';
import { useDispatch } from 'react-redux';
function Sidebar({openSidebarToggle, OpenSidebar}) {
    const {logout:userlogout}=useUser();
    const dispatch =useDispatch();
    const handlelogout =()=>{
        userlogout();
        dispatch(logout({username:null}))
        Navigate("/");
    }
  return (
    <aside id="sidebar" className= "sidebar-responsive">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                < RiAuctionFill className='icon_header'/> AUCTION
            </div>
            <span className='close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
           
            <li className='sidebar-list-item'>
                <Link to="/page2">
                    <BsFillArchiveFill className='icon' onClick={OpenSidebar}/>Products
                </Link>
            </li>
           
            <li className='sidebar-list-item'>
                <Link to="/bid">
                <BiDetail className='icon'onClick={OpenSidebar}/>MyBid
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/list"> 
                <GiPodiumWinner className='icon'onClick={OpenSidebar}/>
                   Top Winners
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/feedback">
                    <VscFeedback className='icon'/> FeedBack
                </Link>
            </li>
          
        </ul>
        <div className='logout'>
            <Link to="/" onClick={handlelogout}>
                 LOGOUT
            <CiLogout className='log'/>
            </Link>
        </div>
    </aside>
  )
}

export default Sidebar