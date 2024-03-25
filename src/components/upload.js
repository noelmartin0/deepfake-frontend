import React, { useState } from 'react';
import axios from 'axios';
import "./upload.css";

const Upload = ({ onSuccess, onError }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    try {
      const formData = new FormData();
      formData.append('video', selectedFile);

      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      onSuccess(response.data); // Pass the uploaded file path to the onSuccess callback
    } catch (error) {
      onError(error); // Pass the error to the onError callback
    }
  };

  const handleButtonClick = () => {
    // Trigger file input click
    document.getElementById('fileInput').click();
  };

  return (
    <div>
      <input
        type="file"
        accept="video/*" // Filter for video files
        id="fileInput"
        onChange={handleFileChange}
        style={{ display: 'none' }} // Hide the file input
      />
      <button className="upload" onClick={handleButtonClick}>
        <span className="upload1">Upload</span>
      </button>
    </div>
  );
};

export default Upload;
