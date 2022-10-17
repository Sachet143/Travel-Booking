import React from "react";

const YoutubeComponent = ({ width = "100%", height = 315, id }: any) => {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
};

export default YoutubeComponent;
