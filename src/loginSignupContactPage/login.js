import * as React from 'react';
import image from '../img/login.jpg';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex justify-center items-center px-16 py-20 max-md:px-5 bg-gradient-to-b from-purple-700 to-purple-900">
      <div className="pl-16 mt-8 max-w-full bg-white rounded-[42px] w-[1011px] max-md:pl-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-3 items-start mt-8 max-md:flex-wrap max-md:mt-10">
              <div className="flex flex-col grow shrink-0 mt-3.5 basis-0 w-fit max-md:max-w-full">
                <div className="text-4xl font-extrabold text-black max-md:max-w-full">
                  Log in
                </div>
                <div className="shrink-0 mt-1.5 ml-4 bg-purple-700 border-purple-700 border-solid border-[5px] h-[5px] w-[82px] max-md:ml-2.5" />
                <input
                  type="text"
                  placeholder="Email"
                  className="justify-center items-start px-4 py-4 mt-32 text-xl whitespace-nowrap bg-white rounded-xl border border-purple-800 border-solid text-purple-700 text-opacity-40 max-md:pr-5 max-md:mt-10 max-md:max-w-full"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="justify-center items-start px-4 py-4 mt-6 text-xl whitespace-nowrap bg-white rounded-xl border border-purple-800 border-solid text-purple-700 text-opacity-40 max-md:pr-5 max-md:max-w-full"
                />
                <div className="mt-7 text-base text-purple-700 max-md:max-w-full">
                  Forgot Password?
                </div>
                <div className="flex gap-5 mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="flex-auto my-auto text-base text-purple-700 font-[290]">
                    <span className="text-black">Don’t have an account? </span>
                    <Link to="/signup" className="text-purple-700 ">Signup</Link>
                  </div>
                  <Link to="/in" className="justify-center px-10 py-3.5 text-xl text-white whitespace-nowrap bg-purple-700 rounded-xl max-md:px-5">
                    Login
                  </Link>
                </div>
              </div>
              <Link to="/" className="text-3xl text-purple-800 mt-1">
                x
              </Link>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={image}
              className="grow w-full aspect-[0.68] max-md:mt-10 rounded-r-[42px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
