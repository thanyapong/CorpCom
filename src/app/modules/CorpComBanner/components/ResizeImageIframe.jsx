import React, { useRef } from 'react';

const ResizableIframe = ({ imageUrl }) => {
  const iframeRef = useRef(null);

  const handleImageLoad = (event) => {
    const image = event.target;
    const { width, height } = image;

    if (iframeRef.current) {
      iframeRef.current.style.width = `${width}px`;
      iframeRef.current.style.height = `${height}px`;
    }
  };

  return (
    <div>
      <img
        src={imageUrl}
        alt="Resizable Image"
        onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
      <iframe
        ref={iframeRef}
        src={imageUrl}
        title="Resizable Iframe"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default ResizableIframe;
