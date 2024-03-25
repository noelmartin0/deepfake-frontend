import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Background from "../components/property1-variant";
import Footer from "../components/footer";
import Upload from "../components/upload";
import "./home.css";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleUploadSuccess = (filePath) => {
    console.log('File uploaded successfully:', filePath);
    setUploadSuccess(true);
    navigate('/result'); // Use navigate function to navigate
  };

  const handleUploadError = (error) => {
    console.error('Error uploading file:', error);
  };

  return (
    <div className="home">
      <header className="result-parent">
        <Background
          propTop="0px"
          propBackground="linear-gradient(127.22deg, #000 53.53%, #16431d)"
          propLeft="0px"
          // propWidth="100%"
          // propHeight="100%"
          propMargin="0 !important"
          propRight="0px"
          propBottom="0px"
        />
        <div className="result-area">
          <div className="deepfake-detector">
            <h1 className="deepfake-detectionio">
              <p className="deepfake"><span className="deep">Deep</span><span className="io">Fake</span></p>
              <p className="detectionio">Detection<span className="io">.io</span></p>
            </h1>
              <Upload onSuccess={handleUploadSuccess} onError={handleUploadError} />
          </div>
        </div>
        <Footer />
      </header>
    </div>
  );
};

export default Home;
