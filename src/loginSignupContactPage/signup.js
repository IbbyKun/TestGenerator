import * as React from 'react';
import image from '../img/singnup.jpg';
import { Link } from 'react-router-dom';

export default function Signup() {
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
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-3.5 items-start max-md:flex-wrap">
                <div className="flex flex-col grow shrink-0 mt-3.5 text-xl basis-0 text-purple-700 text-opacity-40 w-fit max-md:max-w-full">
                  <div className="text-4xl font-extrabold text-black max-md:max-w-full">
                    Sign Up
                  </div>
                  <div className="shrink-0 mt-1.5 ml-5 bg-purple-700 border-purple-700 border-solid border-[5px] h-[5px] w-[105px] max-md:ml-2.5" />
                  <div className="mt-9 text-base text-purple-800 max-md:max-w-full">
                    Create your account to get started{' '}
                  </div>
                </div>
                <Link to="/" href="#" className="text-3xl text-purple-800 mt-1">
                  x
                </Link>
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="justify-center items-start px-4 py-2 mt-2 text-xl bg-white rounded-xl border border-purple-800 border-solid text-purple-700 text-opacity-40 max-md:pr-5 max-md:max-w-full"
              />
              <input
                type="text"
                placeholder="Work Email"
                className="justify-center items-start px-4 py-2 mt-2 text-xl bg-white rounded-xl border border-purple-800 border-solid text-purple-700 text-opacity-40 max-md:pr-5 max-md:max-w-full"
              />
              <div className="flex gap-2.5 mt-2 text-xl text-purple-700 text-opacity-40 max-md:flex-wrap max-md:max-w-full">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="grow justify-center items-start px-3.5 py-2 bg-white rounded-xl border border-purple-800 border-solid w-fit max-md:pr-5"
                />
                <input
                  type="text"
                  placeholder="Job/Position"
                  className="grow justify-center items-start px-3.5 py-2 whitespace-nowrap bg-white rounded-xl border border-purple-800 border-solid w-fit max-md:pr-5"
                />
              </div>
              <input
                type="text"
                placeholder="Password"
                className="justify-center items-start px-4 py-2 mt-2 text-xl whitespace-nowrap bg-white rounded-xl border border-purple-800 border-solid text-purple-700 text-opacity-40 max-md:pr-5 max-md:max-w-full"
              />
              <input
                type="text"
                placeholder="Confirm Password"
                className="justify-center items-start px-4 py-2 mt-2 text-xl bg-white rounded-xl border border-purple-800 border-solid text-purple-700 text-opacity-40 max-md:pr-5 max-md:max-w-full"
              />
              <textarea
                placeholder="Enter Company Details for Chat"
                className="items-start px-4 py-8 mt-2 text-xl bg-white rounded-xl border border-purple-800 border-solid text-purple-700 text-opacity-40 max-md:pr-5 max-md:max-w-full"
              ></textarea>
              <div className="flex gap-5 mt-7 mb-10 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto -mt-0.5 mb-auto ml-1 text-base text-purple-700 font-[290]">
                  <span className="text-black">Already have an account? </span>
                  <Link to="/login" className="text-purple-700">
                    Login
                  </Link>
                </div>
                <button className="justify-center items-start self-end px-3 py-2 mt-1 -mt-3 max-w-full text-white whitespace-nowrap bg-purple-700 rounded-xl w-[134px] max-md:px-5 flex justify-center">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
