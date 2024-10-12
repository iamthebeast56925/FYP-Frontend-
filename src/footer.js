import React from 'react';
import img2 from "./image/icon.png";

function Footer() {
  return (
    <footer class="site-footer">
      
 <center>
 <div class="icon">
 <img src={img2}></img> </div>
 <p><h3>Instant skin disease detection with AI technology – accessible anytime, anywhere.</h3></p>

 </center>
 
            <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
           <center><p class="copyright-text">Copyright & copy; 2024 All Rights Reserved.
         
            </p></center> 
          
            </div>
            
          </div>
            </div> <div class="footer-button">
            <a href="/term">Terms Of Use</a>
            </div>
            <div class="footer-buttons">
            <a href="/privacy">Privacy Policy</a>
            </div>
           
            </footer> 
  );
};
export default Footer;