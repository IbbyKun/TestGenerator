import * as React from "react";
import { Link } from 'react-router-dom';

export default function ViewTest() { 

  return (
    <div className="flex flex-col py-9 pr-20 pl-8 text-2xl text-white bg-white max-md:px-5">
      <div className="self-start font-extrabold text-black max-md:max-w-full">
        Job Title
      </div>
      <div className="shrink-0 mt-0.5 ml-0.5 bg-purple-700 border-purple-700 border-solid border-[3px] h-[3px] w-[96px] max-md:ml-2.5" />
      <div className="flex flex-col self-center px-6 pt-4 pb-20 mt-7 w-full bg-purple-800 max-w-[944px] max-md:pl-5 max-md:max-w-full">
        <div className="max-md:max-w-full">Job Details</div>
        <div className="shrink-0 mt-3 bg-white border-white border-solid border-[3px] h-[3px] max-md:max-w-full" />
        <div className="mt-6 max-md:max-w-full">
          <span className="font-bold text-white">Title:</span>
          <span className="text-white"> abc</span>
          <br />
          <span className="font-bold text-white">Mission:</span>
          <span className="text-white"> xyz</span>
          <br />
          <span className="font-bold text-white">Context:</span>{" "}
        </div>
        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          Scenarios & Questions
        </div>
        <div className="shrink-0 mt-2.5 bg-white border-white border-solid border-[3px] h-[3px] max-md:max-w-full" />
        <div className="mt-5 max-md:max-w-full">
          <span className="font-bold text-white">Scenario:</span>
          <span className="text-white"> abc</span>
          <br />
          <span className="font-bold text-white">Question:</span>
          <span className="text-white"> xyz</span>
          <br />
          <span className="font-bold text-white">Criteria:</span> <br />
          <span className="font-bold text-white">Question:</span>
          <span className="text-white"> xyz</span>
          <br />
          <span className="font-bold text-white">Criteria:</span>
        </div>
        <div className="shrink-0 mt-7 h-0.5 bg-white border-2 border-white border-solid max-md:max-w-full" />
        <div className="mt-4 max-md:max-w-full">
          <span className="font-bold text-white">Scenario:</span>
          <span className="text-white"> abc</span>
          <br />
          <span className="font-bold text-white">Question:</span>
          <span className="text-white"> xyz</span>
          <br />
          <span className="font-bold text-white">Criteria:</span>{" "}
        </div>
      </div>
      <div className="flex gap-5 justify-between self-center mt-6 w-full text-xl font-bold whitespace-nowrap max-w-[944px] max-md:flex-wrap max-md:max-w-full">
        <button className="justify-center items-start px-10 py-4 bg-purple-700 rounded-xl max-md:px-5">
          Edit
        </button>
        <Link to="/in" className="justify-center px-11 py-4 bg-purple-700 rounded-xl max-md:px-5" >
          Delete
        </Link>
      </div>
    </div>
  );
}


