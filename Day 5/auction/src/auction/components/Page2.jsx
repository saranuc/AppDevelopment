import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../SideBar/SideBar'
import "../css/page.css"
import watch from './watch.jpeg'
import iphone from './iphone.jpg'
export default function Page2() {
    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
        }
  return (
    <div>
        <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className='details'>
<div className='hov'>

      <div className='pad'>
           <div className='pro'>
               <img src={watch}></img>
          </div>
          <div className='price'></div>
          </div>
           </div>
              <h6 className='sed'>
                 Price:4000rs
               </h6>
        <div className='status'>
          <h6 >
            CLOSED
          </h6>
        </div>
          <div className='name'>
          <h6>SARAN</h6>
          </div>
        <div className='button-container5'>
          <button type='submit'> BUY NOW</button>
        </div>
</div>
    
<div className='hov1'>

<div className='pad1'>
     <div className='pro1'>
         <img src={iphone}></img>
    </div>
    <div className='price1'></div>
    </div>
     </div>
        <h6 className='sed1'>
           Price:40000rs
         </h6>
  <div className='status1'>
    <h6 >
      CLOSED
    </h6>
  </div>
    <div className='name1'>
    <h6>SARAN</h6>
    </div>
  <div className='button-container51'>
    <button type='submit'> BUY NOW</button>
  </div>
</div>
  )
}
