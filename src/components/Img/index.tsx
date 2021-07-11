import React, { useState } from "react";

interface IProps {
  src: string;
  alt: string;
}

const Img = ({ src, alt }: IProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="img">
      {!loaded && <div className="img-loader loader"></div>}
      <img
        style={{ opacity: loaded ? 1 : 0 }}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default Img;
