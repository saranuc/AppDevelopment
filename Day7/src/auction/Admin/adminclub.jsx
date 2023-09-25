import React from 'react'
import Header from '../Header/Adminheader';
import Sidebar from '../SideBar/Adminsidebar';
import { Link } from 'react-router-dom';
import '../css/adminclub.css'
import adminlogo from '../adminclub.png'
import adminlogo1 from '../adminclub1.png'

export default function Adminclub() {

  const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
      };
  return (
    <div>
        <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/* <Footer /> */}
      <div className='metric'>

    <div className='dashboard'>
{/* <AdminSide/> */}
<div className='hell'>

<div className='conin1'>
          <Link to="/bmw">
            <img src={"https://images-workbench.99static.com/vaNTCQHDxWWfpks4j_R6JoSSemo=/99designs-contests-attachments/79/79328/attachment_79328229"} alt="loading..." className='c1'></img> 
            </Link> 
          <div className='ctxt1'>
            <Link to='/BMW'style={{ left:"0%",top:"87%",bottom: "0%"}}>CELEBRITY AUCTION</Link>
          </div>
          </div>
  </div>
          <div className='conin2'>
            <Link to='/jagu'>
            <img src={adminlogo} alt="loading..." className='c2'></img> 
            </Link>
           <div className='ctxt1'>
              <Link to='/jagu'style={{left:"0px",bottom:"0px",color:"black",top:"87%"}}>GENEROSITY AUCTIONS</Link>
          </div>
          </div>
          <div className='conin3'>
            <Link to='/lexus'>
            <img src={adminlogo1} alt="loading..." className='c3'></img> 
            </Link>
          <div className='ctxt1'>
            <Link to='/lexus'style={{left:"0px",bottom:"0px",top:"87%",color:"black"}}>AVIAUCTION</Link>
          </div>
          </div>
           {/* <div className='conin4'> 
            <Link to='/mercedes'>
            <img src={"http://www.sagmart.com/uploads/2018/09/24/product_1/mercedes-benz-c-class-progressive-c-220d.jpg"} alt="loading..." className='c4'></img> 
            </Link>
          </div>
          <div className='conin5'>
            <Link to='/bmw3'>
            <img src={("https://cdni.autocarindia.com/ExtraImages/20210114120710_BMW_320Ld_tracking.jpg")} alt="loading..." className='c4'></img> 
            </Link>
          </div>
          <div className='conin6'>
            <Link to='/mini'>
            <img src={("https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Reviews/20210702055716_Mini-Cooper-JCW-front-static-1.jpg&c=0")} alt="loading..." className='c4'></img> 
            </Link>
          </div>
          <div className='conin7'>
            <Link to='/volvo'>
            <img src={("https://carsales.pxcrush.net/carsales//cars/dealer/3mg1dlvrvnji2sjwr7p21ozw0.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480")} alt="loading..." className='c4'></img> 
            </Link>
          </div>
          <div className='ctxt1'>
            <Link to='/mercedes'style={{left:"100px",top:"1470px"}}>MERCEDES-BENZ C<br></br> CLASS C220d Progressive</Link>
          </div>
          <div className='ctxt1'>
            <Link to='/bmw3'style={{left:"570px",top:"1470px"}}>BMW 320 LD</Link>
          </div>
          <div className='ctxt1'>
            <Link to='/mini'style={{left:"1050px",top:"1470px"}}>MINI(John Cooper Works)</Link>
          </div>
          <div className='ctxt1'>
            <Link to='/volvo'style={{left:"100px",top:"1990px"}}>VOLVO XC60<br></br> D5 Inscription</Link>
          </div>  */}

    </div>
    </div>
    </div>
  )
}
