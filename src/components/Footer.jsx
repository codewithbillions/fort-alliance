import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrappe">
      <div className="footer-section-one paddings innerWidth">
      
        <div className="footer-logo-container">
          <img src="./logo.png" alt="" />
        </div>
       
      </div>
      <div className="flexCenter">
        <div className="footer-section-columns">
          <span>+234-810-638-4968</span>
          <span>
          +234-906-032-3201</span>
          <span>info@fortallianceltd.com</span>
          <span>instagram: @fort_alliance</span>
        </div>
        <div className="footer-section-columns">
          
        </div>
      </div>
    </div>
  );
};

export default Footer;







// import React from "react"
// import "./Footer.css";

// const Footer = () => {
//     return(
//     <section className="f-wrapper">
//         <div className="paddings innerWidth flexCenter f-container">
        
//             <div className="flexColStart f-left">
//                 <img src="./logo3.png" alt="" width={120}/>

//                 <span className="secondaryText">
//                 Innovative designs,Excellent delivery.</span>
//             </div>
//             <div className="flexColStart f-right">
//             <span className="
//             primaryText">Information</span>
           
//             <span>address</span>

//             <div className="flexCenter f-menu">
//             </div>
//             </div>
//         </div>
    
//     </section>)
// }

// export default Footer