import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './App.css'; // Ensure CSS is correctly imported
import Footer from './footer';
import Navbar from './navbar';
import first from './first.png';
import sec from './sec.png';
import third from './third.png';
import instruction from './instruction.png';

function UPLOAD() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Check if JWT token exists in localStorage
    const token = localStorage.getItem('token'); // Adjust this key based on your actual token key
    if (!token) {
      navigate('/login'); // Redirect to login if no token
    }
  }, [navigate]);

  // Function to handle file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a preview for the uploaded image
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (image) {
      console.log('Image uploaded successfully!');
      // Here, you would typically send the image to your backend API
    } else {
      alert('Please select an image before submitting.');
    }
  };

  // Function to remove the image
  const handleRemoveImage = () => {
    setImage(null);
    document.getElementById('file-upload').value = ''; // Reset file input value
  };

  return (
    <div>
      <Navbar />
      <div className="edit01">
        <h2>
          <b><center>Identify Your Skin Condition with Artificial Intelligence</center></b>
        </h2>
      </div>
      <div className="edit02">
        <center>Upload a photo to instantly learn what your condition is and how to treat it.</center>
      </div>

      {/* Section 1 */}
      <div className="boxup">
        <div className="side-image2">
          <center><img src={first} alt="First step" /></center>
        </div>
        <div className="text-content2">
          <div className="detailup"><b>It’s as simple as uploading a photo.</b></div>
          <div className="detail1up">Follow our instructions to upload a photo of a skin problem.</div>
        </div>
      </div>

      {/* Instruction Image */}
      <div className="image">
        <img src={instruction} style={{ width: "760px", height: "410px" }} alt="Instruction" />
      </div>

      {/* Section 2 */}
      <div className="boxup1">
        <div className="side-image2">
          <center><img src={sec} alt="Second step" /></center>
        </div>
        <div className="text-content2">
          <div className="detailup"><b>We’ll analyze the photo.</b></div>
          <div className="detail1up1">Our advanced AI will instantly provide a preliminary diagnosis and general precautions.</div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="boxup2">
        <div className="side-image2">
          <center><img src={third} alt="Third step" /></center>
        </div>
        <div className="text-content2">
          <div className="detailup"><b>Get Answers, Instantly</b></div>
          <div className="detail1up2">We provide you with a list of possible skin conditions and recommended precautions.</div>
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="upload-container">
        <form id="upload-form" onSubmit={handleSubmit}>
          <label htmlFor="file-upload" className="upload-button">
            Choose Image from your Computer
          </label>
          <input id="file-upload" type="file" onChange={handleFileChange} />
          <button type="submit" className="submit-button">Upload Image</button>
        </form>

        {/* Display the uploaded image preview with remove button */}
        {image && (
          <div className="image-preview">
            <h3>Image Preview:</h3>
            <img src={image} alt="Preview" className="uploaded-image" />
            <button className="remove-button" onClick={handleRemoveImage}>Remove Image</button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default UPLOAD;
