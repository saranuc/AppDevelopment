import React from 'react'
import { Link } from 'react-router-dom'
import 
 { BsPersonCircle,BsJustify}
 from 'react-icons/bs'
import "../css/header.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../components/redux/userSlice';
function Header({OpenSidebar}) {

  const user=useSelector(selectUser);
  const username=user.user && user.user.username?user.user.username:'Guest';
  console.log(user.username)
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='n'>

        <Link>Home</Link>
        <Link to="/about">About us</Link>
        </div>
        <div className='user-name'>
            {user.username}
        </div>
        <div className='header-left'>
            <Link>Admin</Link>
        </div>
        <div className='header-right'>
            <BsPersonCircle className='icon' />
        </div>
    </header>
  )
}
export default Header