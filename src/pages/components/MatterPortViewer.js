import React from 'react';

const MatterportViewer = ({ tourId }) => {
  return (
    <iframe
        id="matterport"
      src={`https://my.matterport.com/show/?m=riyiYKc5NuF&`}
      width="100%"
      height="500px"
      allowFullScreen
      frameBorder="0"
      title="Matterport 3D Tour"
    ></iframe>
  );
};

export default MatterportViewer;