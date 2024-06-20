import * as React from "react";
import logo1 from '../img/settings-gears.png'
import logo2 from '../img/brainstorm.png'
import logo3 from '../img/wall-clock.png'
import logo4 from '../img/handshake.png'
import logo5 from '../img/coin.png'

export default function Benefits() {
  return (
    <div id="benefits" className="flex flex-col items-center px-20 py-20 bg-white max-md:px-5">
      <div className="text-5xl font-extrabold text-black">Benefits</div>
      <div className="shrink-0 mt-2.5 bg-purple-700 border-purple-700 border-solid border-[5px] h-[5px] w-[139px]" />
      <div className="mt-10 w-full max-w-[1105px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl max-md:mt-10">
              <img
                loading="lazy"
                srcSet={logo1}
                className="self-center w-24 aspect-[1.03]"
              />
              <div className="mt-10 ml-10 font-semibold text-purple-800 max-md:mt-10">
                Custom Test Creation{" "}
              </div>
              <div className="mt-6 ml-0 text-center text-black">
                Create tailored tests that match your job requirements
                perfectly.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center self-stretch my-auto text-2xl max-md:mt-10">
              <img
                loading="lazy"
                srcSet={logo2}
                className="aspect-square w-[81px]"
              />
              <div className="mt-11 font-semibold text-purple-800 max-md:mt-10">
                AI Analysis
              </div>
              <div className="self-stretch mt-6 text-center text-black">
                Advanced AI algorithms analyze candidate responses for accurate
                assessment.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center mt-5 text-2xl max-md:mt-10">
              <img
                loading="lazy"
                srcSet={logo3}
                className="aspect-square w-[70px]"
              />
              <div className="mt-11 font-semibold text-purple-800 max-md:mt-10">
                Time Efficiency
              </div>
              <div className="self-stretch mt-3 text-center text-black">
                Save time with automated test generation and result analysis.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 max-w-full w-[760px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl max-md:mt-10">
              <img
                loading="lazy"
                srcSet={logo4}
                className="self-center aspect-[0.91] w-[84px]"
              />
              <div className="mt-6 ml-7 font-semibold text-purple-800">
                Personalized Recruitment
              </div>
              <div className="mt-9 text-center text-black">
                Find the perfect fit for your team with personalized recruitment
                solutions.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center mt-3.5 text-2xl max-md:mt-10">
              <img
                loading="lazy"
                srcSet={logo5}
                className="aspect-[1.04] w-[73px]"
              />
              <div className="mt-8 font-semibold text-purple-800">
                Cost Saving
              </div>
              <div className="self-stretch mt-8 text-center text-black">
                Reduce recruitment costs with efficient and effective candidate
                evaluation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

