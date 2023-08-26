import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center bg-gray-200 items-center h-[calc(100vh-68px)] px-28 ">
      <p className="text-2xl font-thin">L</p>
      <div className="w-4 h-4 border-4 border-dashed rounded-full animate-spin border-blue-400"></div>
      <p className="text-2xl font-thin">ading....</p>
    </div>
  );
};

export default LoadingSpinner;
