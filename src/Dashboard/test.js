import * as React from 'react';

export default function Test() {
  return (
    <div className="flex flex-col items-center pt-10 pr-20 pb-20 pl-8 text-xl text-white bg-white max-md:px-5">
      <div className="self-start text-2xl font-extrabold text-black max-md:max-w-full">
        Welcome
        <div className="shrink-0 mt-1 ml-3 bg-purple-700 border-purple-700 border-solid border-[2px] h-[5px] w-[84px] max-md:ml-2.5" />
      </div>

      <div className="flex flex-col items-start self-center px-5 pt-5 pb-12 mt-7 w-full bg-purple-800 rounded-3xl max-w-[944px] max-md:max-w-full">
        <div className="self-stretch text-2xl max-md:max-w-full">Test</div>
        <div className="shrink-0 mt-3 ml-4 bg-white border-white border-solid border-[3px] h-[3px] w-[34px] max-md:ml-2.5" />
        <div className="mt-5 ml-3 max-md:ml-2.5">Job Title:</div>
        <div className="mt-2.5 ml-4 max-md:ml-2.5">abc</div>
        <div className="shrink-0 self-stretch mt-7 h-0.5 bg-white border-2 border-white border-solid max-md:max-w-full" />
        <div className="mt-7 ml-2.5 text-2xl">Scenarios & Questions</div>
        <div className="shrink-0 mt-2.5 ml-3.5 bg-white border-white border-solid border-[3px] h-[3px] w-[249px] max-md:ml-2.5" />
        <div className="self-stretch mt-5 max-md:max-w-full">Scenario:</div>
        <div className="mt-2 ml-3.5 max-md:ml-2.5">abc</div>
        <div className="self-stretch mt-9 max-md:max-w-full">Question:</div>
        <div className="mt-1.5 ml-3.5 max-md:ml-2.5">abc</div>
        <input
          type="text"
          placeholder="Your Answer"
          className="justify-center items-start self-stretch px-6 py-4 mt-12 bg-white rounded-xl border border-purple-800 border-solid text-purple-700 text-opacity-40 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        />
        <div className="shrink-0 self-stretch mt-5 w-full h-0.5 bg-white border-2 border-white border-solid" />
      </div>
      <button className="px-6 py-2 mt-5 max-w-full whitespace-nowrap bg-purple-700 rounded-lg w-[134px] max-md:px-5">
        Submit
      </button>
    </div>
  );
}
