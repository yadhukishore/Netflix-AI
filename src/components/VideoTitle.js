import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black to-transparent">
      <div className="max-w-3xl">
        <h1 className="text-2xl md:text-6xl font-extrabold leading-tight mb-4">{title}</h1>
        <p className="hidden md:inline-block  text-xl font-medium mb-8">{overview}</p>
        <div className="flex space-x-4">
          <button className="bg-white text-black py-2 px-6 rounded-md font-semibold hover:bg-gray-200 transition duration-300 hover:bg-opacity-65">
          ▷ Play
          </button>
          <button className="hidden md:inline-block bg-gray-500 text-white py-2 px-6 rounded-md font-semibold bg-opacity-70 'hover:bg-opacity-90' transition duration-300 hover:bg-opacity-50 from-white">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;