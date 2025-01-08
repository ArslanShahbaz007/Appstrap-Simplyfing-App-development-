import React from "react";

const MainContent = ({ content }) => {
  return (
    <div className="w-3/4 h-screen p-4 overflow-y-auto pt-20">
      <h1 className="text-2xl font-bold mb-4">{content.title}</h1>
      <p>{content.description}</p>
      <div className="mt-4">{content.example}</div>
    </div>
  );
};

export default MainContent;
