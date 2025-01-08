import React from "react";

const Sidebar = ({ items, onSelect }) => {
  return (
    <div className=" h-screen bg-gray-900 text-white p-4 pt-10">
      <h2 className="text-lg font-bold mb-4">Components</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => onSelect(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
