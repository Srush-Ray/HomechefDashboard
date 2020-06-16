import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebookSquare } from 'react-icons/fa';
import './Footer.css';
function FooterPage() {
    return (


        <div className="main-footer" >
        <div style={{marginTop:'20px'}}>
        <p style={{backgroundColor:'#19075E', textDecorationColor:'#19075E'}}>1</p>
        </div>
        <div className="container">
        <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
            <h4>Information</h4>
            <ul className="list-unstyled">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
            <h4>Support</h4>
            <ul className="list-unstyled">
            <li>Contact Us</li>
            </ul>
            </div>   
            { /* Column 3 */}
            <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
            <h4>Yes we are social</h4>
            <ul className="list-unstyled">
            <FaInstagram size='2rem' className="FaInstagram" />
            <FaWhatsapp size='2rem' style={{marginLeft:'10%'}} className="FaWhatsapp"/>
            <FaFacebookSquare size='2rem' style={{marginLeft:'10%'}} className="FaFacebookSquare"/>
            </ul>
            </div>   
        </div>

        <div className="footer-bottom" >
                <p className="text-xs-center">
                    &copy;{ new Date().getFullYear() } - HomeChef | Erfinden Technologies Pvt.Ltd. | Terms Of Service | Privacy.
                </p>
        </div>

        </div>    
        </div>
        
        
    )
}

export default FooterPage;