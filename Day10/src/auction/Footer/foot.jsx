import React from "react";
import '../css/footer.css';
import { Link } from "react-router-dom";
 function Footer(){
    return(
        <>
        <div className="footer">
        <div className="foot">
            <div className="ft">Copyright©2023</div>
            <div className="ft">
                <Link to="/faq">FAQ</Link>
                </div>
            <div className="ft">
                <Link to ="/policy"> Privacy Policy</Link>
            </div>
            <div className="ft">
                <Link to ="/term" >Terms and Conditions </Link>
            </div>
            <div className="ft">
                <Link to="/adlo"> Admin</Link>
             </div>
        </div>
        </div>
        </> 
    )
}
export default Footer;