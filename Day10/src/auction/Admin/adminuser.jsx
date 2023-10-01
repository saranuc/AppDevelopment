import React from 'react'
import Header from '../Header/Adminheader'
import Sidebar from '../SideBar/Adminsidebar'
import Footer from '../Footer/foot';
import '../css/adminuser.css'


export default function Adminuser() {

    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
        };
  return (
    <div>
        <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/* <Footer /> */}
      <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Second Name</th>
          <th>Email</th>
          <th>Phone No</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Saran</td>
            <td>UK</td>
            <td>727821tucs220@gmail.com</td>
            <td>958563839</td>
        </tr>
        <tr>
             <td>sj</td>
            <td>UK</td>
            <td>727821tucs220@gmail.com</td>
            <td>958563839</td>
        </tr>
        <tr>
             <td>sjk csjkj</td>
            <td>UK</td>
            <td>727821tucs220@gmail.com</td>
            <td>958563839</td>
        </tr>
        <tr>
             <td>sjmd c csjkj</td>
            <td>UK</td>
            <td>727821tucs220@gmail.com</td>
            <td>958563839</td>
        </tr>
        <tr>
             <td>sjk csjkj</td>
            <td>UK</td>
            <td>727821jqntucs220@gmail.com</td>
            <td>958563839</td>
        </tr>
      </tbody>
      </table>


    </div>
      
      )
}
