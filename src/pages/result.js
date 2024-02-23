import Background from "../components/property1-variant";
import Footer from "../components/footer";
import Navbar from "../components/nav";
import "./result.css";
import React, { useState, useEffect } from 'react';



const Result = () => {
  return (
    <div className="home">
      <header className="result-parent">
        <Navbar/>
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
        <div className="result-area2">
          <img className="img-uploaded" src="/pexelsandreapiacquadio774909-1@2x.png"/>
          <div className="deepfake-detector2">
            <h1 className="deepfake-detectionio2">
              <p className="deepfake2"><span className="deep">The video file upload is</span></p>
              <p><span className="io2">Real.</span></p>
            </h1>
          </div>
        </div>
        <Footer />
      </header>
    </div>
  );
};

export default Result;
