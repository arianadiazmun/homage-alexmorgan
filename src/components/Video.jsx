import React from 'react';

const Video = () => {
  const src = "https://www.youtube.com/embed/nnXIeJ9v1mg"; 

  return (
    <div className='video-container'>
    <iframe
      title="YouTube Video"
      width="100%"
      height="400"
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    </div>
  );
};

export default Video;
