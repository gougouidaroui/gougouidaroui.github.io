import './App.css';
import React, { useState, useEffect } from 'react';

const Alert = ({ message, duration = 2000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="alert">
      {message}
    </div>
  );
};

function importAllImages(r) {
  return r.keys().map(r);
}

const images = importAllImages(require.context('./static/images', false, /\.(jpg|png|svg)$/));

const copyImageToClipboard = async (imageUrl, setAlertMessage) => {
  try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const reader = new FileReader();
      reader.readAsDataURL(blob);

      reader.onloadend = async () => {
          setAlertMessage('Image started to download');
      };
  } catch (error) {
      console.error('Failed to copy image to clipboard:', error);
          setAlertMessage('Failed to copy image.');
  }
};

const ImageGallery = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const handleAlertClose = () => setAlertMessage('');
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
  };

  const imageElements = images.map((image, index) => {
    const imageUrl = image.default || image;  // Handle Webpack's default property
    const imageName = `image${index + 1}`;

    return (
      <div key={index} className="card">
        <a download={imageName} href={imageUrl} onContextMenu={handleContextMenu} onTouchStart={handleTouchStart}>
          <img
            src={imageUrl}
            alt={imageName}
            onClick={() => copyImageToClipboard(imageUrl, setAlertMessage)}
            style={{ cursor: 'pointer' }}
          />
        </a>
      </div>
    );
  });

  return (
    <div className="showcase">
      {imageElements}
      {alertMessage && (
        <Alert
          message={alertMessage}
          duration={2000}
          onClose={handleAlertClose}
        />
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="header">
      <div className="name">
      <span>Collection</span>
      </div>
      </div>
      <div id="container" className="container">
      <ImageGallery />
      </div>
    </div>
  );
}

export default App;
