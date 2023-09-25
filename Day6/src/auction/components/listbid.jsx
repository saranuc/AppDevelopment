import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../SideBar/SideBar'
import Footer from '../Footer/foot';
import AdminSide from '../Admin/adminside';
import '../css/list.css';
import { Link } from 'react-router-dom';
import winner1 from '../components/winner.jpeg'

export default function Listbid() {

    const [openSidebarToggle, setOpenSidebarToggle,setFooterToggle] = React.useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
        };
    const users = [
        { id: 1, name: 'Admin User', email: 'admin@example.com' },
        // Add more user data here
      ];
    
  return (
    <div>
        <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className='co1'>
      <Link>
        <img src={winner1} alt="loading..." className='poto1'></img> 
        </Link> 
      </div>
      
      <div className='cb114'>
      <h2>Name: SARAH</h2>
      <h4>Products: HARLEYDAVIDSON</h4>
      <h4>Price: 9870722</h4>
      <h4>Auction id: 7278</h4>
      </div>
      <div className='co2'>
      <Link>
        <img src={"https://tse3.mm.bing.net/th?id=OIP.mKJQGLQkGd1BiCZ-M0UCPwHaJ4&pid=Api&P=0&h=180"} alt="loading..." className='poto2'></img> 
        </Link> 
      </div>
      <div className='cb115'>
      <h2>Name:JAMES</h2>
      <h4>Products:MERCEDES BENZ S </h4>
      <h4>Price: 98722</h4>
      <h4>Auction id: 7578</h4>
      </div>
     
      <Footer />
    </div>
      
      )
}
