import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaInstagram, FaWhatsapp, FaFacebookSquare } from 'react-icons/fa';
import './Footer.css';

const FooterPage = () => {
  return (
    <MDBFooter style={{backgroundColor:"rgb(208,208,208)"}} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
          <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
          <h4>Information</h4>
          <ul className="list-unstyled">
          <li>About Us</li>
          <li>Terms & Conditions</li>
          <li>Contact Us</li>
          </ul>
          </div>
          </MDBCol>
          <MDBCol>
          <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
          <h4>Support</h4>
          <ul className="list-unstyled">
          <li>Contact Us</li>
          </ul>
          </div>  
          </MDBCol>
          <MDBCol className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
          <h4>Yes we are social</h4>
          <ul className="list-unstyled">
          <FaInstagram size='2rem' className="FaInstagram" />
          <FaWhatsapp size='2rem' style={{marginLeft:'10%'}} className="FaWhatsapp"/>
          <FaFacebookSquare size='2rem' style={{marginLeft:'10%'}} className="FaFacebookSquare"/>
          </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3" style={{backgroundColor:"grey",height: '80%'}}>
        <MDBContainer fluid>
            <b>&Copyright;{ new Date().getFullYear() } - Home-Chef | Erfinden Technologies Pvt.Ltd.</b>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;