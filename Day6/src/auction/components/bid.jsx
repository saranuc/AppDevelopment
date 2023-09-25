import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../SideBar/SideBar'
import Footer from '../Footer/foot';
import '../css/bid.css'
import { Link } from 'react-router-dom';
import iphone from '../components/iphone.jpg'

export default function Bid() {

    const [openSidebarToggle, setOpenSidebarToggle,setFooterToggle] = React.useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
        };
  return (
    <div>
        <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className='headfile'>
        <h2>MY BIDDED PRODUCTS</h2>
      </div>
      <div className='coined1'>
      <div>
        <img src={iphone} alt="loading..." className='bhp11'></img> 
        </div> 
      <div className='bhp1'>
        <div style={{ left:"10%",top:"63%",bottom: "0%"}}>Product Name:Iphone 14</div>
        <div style={{left:"10%",top:"73%",bottom: "0%"}}>Date:03/12/2003</div>
        <div style={{left:"10%",top:"83%",bottom: "0%"}}>FinalPrice:RS 80,000</div>
        <div style={{left:"10%",top:"83%",bottom: "0%"}}>Payment:UPI Id</div>
      </div>
      </div>
      <Footer />
    </div>
      )
}
