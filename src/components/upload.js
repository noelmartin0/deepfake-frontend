import React, { useState } from 'react';
import axios from 'axios';
import "./upload.css";

const Upload = ({ onSuccess, onError }) => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false); // State to track upload status

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    try {
      const formData = new FormData();
      formData.append('video', selectedFile);

      const uploadInstance = axios.create();

      uploadInstance.defaults.onUploadProgress = (progressEvent) => {
        const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        setUploadProgress(progress);
      };

      setUploading(true); // Set uploading state to true when upload starts

      const response = await uploadInstance.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      onSuccess(response.data); // Pass the uploaded file path to the onSuccess callback
    } catch (error) {
      onError(error); // Pass the error to the onError callback
    } finally {
      setUploading(false); // Set uploading state to false when upload completes or fails
    }
  };

  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div>
      <input
        type="file"
        accept="video/*"
        id="fileInput"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button className={`upload ${uploading ? 'uploading' : ''}`} onClick={handleButtonClick}>
        <span className="upload1">{uploading ? '' : 'Upload'}</span>
        {file && (
          <div className="progress-bar" style={{ width: `${uploadProgress}%` }} />
        )}
      </button>
    </div>
  );
};

export default Upload;
