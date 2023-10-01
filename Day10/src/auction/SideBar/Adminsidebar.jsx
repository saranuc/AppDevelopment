import React from 'react'
import { Link } from 'react-router-dom'
import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, 
  BsListCheck, BsFillGearFill}
  
 from 'react-icons/bs'
 import { RiAuctionFill } from 'react-icons/ri';
import "../css/side.css"
function Adminside({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className= "sidebar-responsive">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                < RiAuctionFill className='icon_header'/> 
                ADMIN
            </div>
            <span className='close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/admin/dash">
                    <BsGrid1X2Fill className='icon' onClick={openSidebarToggle}/>Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/user">
                    <BsFillArchiveFill className='icon' onClick={OpenSidebar}/>Users
                </Link>
            </li>
           
            <li className='sidebar-list-item'>
                <Link to="/admin/pro">
                <BsListCheck className='icon'onClick={OpenSidebar}/>Add Product
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/club"> 
                <BsPeopleFill className='icon'onClick={OpenSidebar}/>
                   Club Members
                </Link>
            
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/feedback">
                    <BsFillGearFill className='icon'onClick={OpenSidebar}/>
                        FeedBack
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Adminside