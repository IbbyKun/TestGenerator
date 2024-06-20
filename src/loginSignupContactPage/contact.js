import * as React from "react";
import image from '../img/purple3.jpg'
import { Link } from 'react-router-dom';

export default function MyComponent() {
  return (
    <div className="flex justify-center items-center px-16 py-20 max-md:px-5 bg-gradient-to-b from-purple-700 to-purple-900">
      <div className="pr-8 mt-8 max-w-full bg-white rounded-[42px] w-[1011px] max-md:pr-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={image}
              className="grow w-full aspect-[0.68] max-md:mt-10 rounded-l-[42px]"
            />
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-3.5 items-start self-stretch my-auto max-md:flex-wrap max-md:mt-10">
              <div className="flex flex-col grow shrink-0 mt-4 text-xl basis-0 text-purple-700 text-opacity-40 w-fit max-md:max-w-full">
                <div className="text-4xl font-extrabold text-black max-md:max-w-full">
                  Contact Us
                </div>
                <div className="shrink-0 mt-2 ml-3 bg-purple-700 border-purple-700 border-solid border-[5px] h-[5px] w-[174px] max-md:ml-2.5" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="justify-center items-start px-4 py-2 mt-7 bg-white rounded-xl border border-purple-800 border-solid max-md:pr-5 max-md:max-w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="justify-center items-start px-4 py-2 mt-6 whitespace-nowrap bg-white rounded-xl border border-purple-800 border-solid max-md:pr-5 max-md:max-w-full"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="justify-center items-start px-4 py-2 mt-6 whitespace-nowrap bg-white rounded-xl border border-purple-800 border-solid max-md:pr-5 max-md:max-w-full"
                />
                <textarea
                  placeholder="Your Message"
                  className="items-start px-4 pt-4 pb-28 mt-5 bg-white rounded-xl border border-purple-800 border-solid max-md:pr-5 max-md:max-w-full"
                />
                <button
                  className="justify-center items-start self-end px-3 py-2 mt-3 max-w-full text-white whitespace-nowrap bg-purple-700 rounded-xl w-[134px] max-md:px-5 flex justify-center"
                >
                  Send
                </button>
              </div>
              <Link to="/" className="text-3xl text-purple-800 mt-1">x</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
