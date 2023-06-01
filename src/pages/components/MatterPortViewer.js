import React, { useEffect, useState } from 'react';

const MatterportViewer = ({ tourId }) => {
  const [height, setHeight] = useState("500px");

  useEffect(() => {
    setHeight(window.innerHeight * .50)
  }, []);

  return (
    <iframe
      id="matterport"
      src={`https://my.matterport.com/show/?m=riyiYKc5NuF&`}
      width="100%"
      height={height}
      allowFullScreen
      frameBorder="0"
      title="Matterport 3D Tour"
    ></iframe>
  );
};

export default MatterportViewer;