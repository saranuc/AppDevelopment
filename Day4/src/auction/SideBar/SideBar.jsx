import React from 'react'
import { Link } from 'react-router-dom'
import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, 
  BsListCheck, BsFillGearFill}
  
 from 'react-icons/bs'
 import { RiAuctionFill } from 'react-icons/ri';
import "../css/side.css"
function Sidebar({openSidebarToggle, OpenSidebar}) {
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
                <Link to="/side1">
                    <BsGrid1X2Fill className='icon' onClick={openSidebarToggle}/>Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/page2">
                    <BsFillArchiveFill className='icon' onClick={OpenSidebar}/>Products
                </Link>
            </li>
           
            <li className='sidebar-list-item'>
                <Link to="/bid">
                <BsListCheck className='icon'onClick={OpenSidebar}/>  Bid
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link > 
                <BsPeopleFill className='icon'onClick={OpenSidebar}/>
                   List of bidders
                </Link>
            
            </li>
            <li className='sidebar-list-item'>
                <Link>
                    <BsFillGearFill className='icon'/> Help
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar