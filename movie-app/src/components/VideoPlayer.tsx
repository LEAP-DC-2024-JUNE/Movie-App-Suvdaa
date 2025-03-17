"use client";
import Youtube from "react-youtube";

export const VideoPlayer = ({ trailerKey }) => {
  return (
    <div className="">
      <Youtube videoId={trailerKey} />
    </div>
  );
};
