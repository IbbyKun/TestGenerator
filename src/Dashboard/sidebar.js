import React from "react";

function Sidebar({ selectedOption, onOptionChange }) {
  return (
    <div className="bg-purple-700 text-white flex flex-col items-center mt-28 ml-8 min-h-screen pt-20 w-64 fixed">
      <div className="text-xl font-bold mb-2">User Name</div>
      <div className="bg-white h-0.5 w-52"></div>
      <div className="flex flex-col items-center justify-start flex-grow mt-4 overflow-y-auto">
        <div
          className={`cursor-pointer p-2 pl-20 pr-20 rounded-full ${
            selectedOption === "Overview" ? "bg-purple-500" : ""
          }`}
          onClick={() => onOptionChange("Overview")}
        >
          Overview
        </div>
        <div
          className={`cursor-pointer p-2 pl-24 pr-24  rounded-full ${
            selectedOption === "Profile" ? "bg-purple-500" : ""
          }`}
          onClick={() => onOptionChange("Profile")}
        >
          Profile
        </div>
        <div
          className={`cursor-pointer p-2 pl-20 pr-20  rounded-full ${
            selectedOption === "Chat" ? "bg-purple-500" : ""
          }`}
          onClick={() => onOptionChange("Chat")}
        >
          Create Test
        </div>
        <div
          className={`cursor-pointer p-2 pl-20 pr-20  rounded-full ${
            selectedOption === "MyTests" ? "bg-purple-500" : ""
          }`}
          onClick={() => onOptionChange("MyTests")}
        >
          My Tests
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
