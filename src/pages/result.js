import Background from "../components/property1-variant";
import Footer from "../components/footer";
import Navbar from "../components/nav";
import axios from 'axios';
import "./result.css";
import React, { useState, useEffect } from 'react';

const Result = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [resultValue, setResultValue] = useState(null);

  useEffect(() => {


    axios.get('http://localhost:5000/getVideo')
      .then(response => {
        setVideoFile(response.data.file_url);
        setResultValue(response.data.result);
      })
      .catch(error => {
        console.error('Error fetching video file:', error);
      });

    const handleBeforeUnload = (event) => {
      // Perform actions before page unload (e.g., delete files)
      console.log('Left');
      // Make an AJAX request to delete the uploaded file
      axios.post('http://localhost:5000/delete_all_files')
    .then(response => {
        console.log('All files deleted successfully:', response.data);
    })
    .catch(error => {
        console.error('Error deleting files:', error);
    });

    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="home">
      <header className="result-parent">
        <Navbar/>
        <Background
          propTop="0px"
          propBackground="linear-gradient(127.22deg, #000 53.53%, #16431d)"
          propLeft="0px"
          propMargin="0 !important"
          propRight="0px"
          propBottom="0px"
        />
        <div className="result-area2">
          <video className="img-uploaded" controls src={videoFile}></video>
          <div className="deepfake-detector2">
            <h1 className="deepfake-detectionio2">
              <p className="deepfake2"><span className="deep">The video file upload is</span></p>
              <p><span className="io2">{resultValue}</span></p>
            </h1>
          </div>
        </div>
        <Footer />
      </header>
    </div>
  );
};

export default Result;
