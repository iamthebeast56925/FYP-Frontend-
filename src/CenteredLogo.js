import React from 'react';
import PAT from './PAT.jpg';
import file1 from './file1.jpg';
import model from './model.jpg';


function CenteredLogo() {
  return (
    <div className="slick-list draggable">
      <div class="home">
        <img src={PAT} alt="Skin Disease" /> </div>
        <button class="visitbtn"><a class="a1" href="/login">Scan Here </a></button>
     
    
        <div className="edit1">
        <h2> <b><center>Get instant skin disease detection results without waiting for a dermatologist appointment.
        </center></b> </h2>
        </div>
        <div className="edit2">
        <h2> <b><center>  You don't have to. </center></b> </h2>
        </div>

      <div class="side-image">
    <center><img  src={file1} alt="" /></center> 
      </div>
      <div class="text-content">
<div class="detail0">ACCURATE & ACCESSIBLE</div>
<div class="detail"><b> No scheduling. No appointments.</b></div>
<div class="detail1">
Instant skin disease detection, wherever and whenever you need it.
</div>
<div class="detail2"><ul><li>Upload a picture and receive AI-powered analysis in seconds.</li>

<li>Get instant results without the need for a doctor's visit.</li>

<li>Use our service anytime for quick and easy skin disease detection.</li>
<li>Receive general precautions based on your analysis.</li>
</ul>
</div>
<div className="edit3">
        <h2> <b><center> AI-powered skin disease detection is just as effective, if not more so, than traditional doctor visits. </center></b> </h2>
        </div>
      </div>
      <div class="side-image1">
<center><img  src={model} alt="" /></center> 
  </div>
  <div class="text-content1">
  <button class="btn2"><a class="a1" href="/upload">Scan Here </a></button>
  <div class="detail0">SIMPLE & STRAIGHTFORWARD</div>
  <div class="detail"><b> How it works:</b></div>
  <div class="detail2">
  <ul><li><b>Upload a Picture:</b> Upload a clear image of your skin condition.</li>
  <li><b>AI Analysis:</b> Our AI-powered system will analyze the image.</li>
  <li><b>Get Results:</b>Receive an instant preliminary diagnosis and general precautions.</li>
  </ul>
  </div>
  </div>
  <div className="edit4">
        <h2><center>Here to Help.</center></h2></div>
        <div className="edit5">    <h2> <b><center>Get instant results and advice from our AI-powered system.</center></b> </h2>
        </div>
  </div>
  
  );
}

export default CenteredLogo;



