import React from 'react'
import Header from '../Header/Adminheader'
import Sidebar from '../SideBar/Adminsidebar'
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import boto from '../components/seval.png'
import Footer from '../Footer/foot';
import '../css/adminuser.css'


export default function Adminfeedback() {

    const [openSidebarToggle, setOpenSidebarToggle,setFooterToggle] = React.useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
        };
  return (
    <div>
        <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/* <Footer /> */}
      <div> 
      </div>

      {/* <table>
      <tbody>
        <tr>
            <td>Saran</td>
            <td>Nice Websites to bidding with new products available.</td>
        </tr>
        <tr>
             <td>Jurri</td>
            <td>Bidding next level</td>
        </tr>
        <tr>
             <td>Sriraam vaithiyaa A C</td>
            <td>Very nice Webside</td>
        </tr>
        <tr>
             <td>Sedhuram R</td>
            <td>Worst websites</td>
        </tr>
        <tr>
             <td>Saran </td>
            <td>Modarate to use</td>
        </tr>
      </tbody>
      </table> */}
      <div fluid className="dashboard-container">
      <div className="dashboard-content">
        <Sidebar />
      </div>
      <div className="testimonials-container">
        
        <div className="testimonials">
          {/* Testimonial 1 */}
          <div className="testimonial">
            <FaQuoteLeft className="quote-icon" />
            <p>Worst website I have ever seen.</p>
            <div className="testimonial-info">
              <div className="testimonial-image">
                <img src={boto} alt="User" />
              </div>
              <div className="testimonial-details">
                <div className="testimonial-name">Semdhu</div>
                <div className="testimonial-position">Amazon owner</div>
                <div className="testimonial-stars">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  {/* <div className="testimonial">
            <FaQuoteLeft className="quote-icon" />
            <p>Worst website raa!</p>
            <div className="testimonial-info">
              <div className="testimonial-image">
                <img src={boto} alt="User" />
              </div>
              <div className="testimonial-details">
                <div className="testimonial-name">Vaithiya</div>
                <div className="testimonial-position">student at SKCT</div>
                <div className="testimonial-stars">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  
                </div>
              </div>
            </div>
          </div> */}
          {/* Testimonial 3 */}
          {/* <div className="testimonial">
            <FaQuoteLeft className="quote-icon" />
            <p>Excellent product and outstanding customer support!</p>
            <div className="testimonial-info">
              <div className="testimonial-image">
                <img src={boto} alt="User" />
              </div>
              <div className="testimonial-details">
              <div className="testimonial-name">Saran</div>
                <div className="testimonial-position">on duty</div>
                <div className="testimonial-stars">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                 
                </div>
              </div>
            </div>
          </div> */}
          
          
        </div>
      </div>
    </div>

                  
                </div>
              </div>
            </div>
          </div>

    </div>
      
      )
}
