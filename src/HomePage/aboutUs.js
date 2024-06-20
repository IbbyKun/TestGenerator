import * as React from 'react';
import imagePath1 from '../img/Vision.jpg';
import imagePath2 from '../img/mission.jpg';

export default function aboutUs() {
  return (
    <div id="about" className="flex flex-col px-16 py-14 bg-white max-md:px-5">
      <div className="self-center text-5xl font-extrabold text-black">
        About Us
      </div>
      <div className="shrink-0 self-center mt-2.5 bg-purple-700 border-purple-700 border-solid border-[5px] h-[5px] w-[153px]" />
      <div className="mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={imagePath1}
              className="grow w-full aspect-[1.67] max-md:mt-10 max-md:max-w-full"
              alt="Description of the image"
            />
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-12 text-2xl text-black max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                KayaAI was founded with the vision of revolutionizing the
                recruitment process through the power of artificial
                intelligence. Our team of experts is dedicated to creating
                innovative solutions that help companies find the best talent
                quickly and efficiently.
              </div>
              <div className="shrink-0 mt-12 bg-purple-700 border-purple-700 border-solid border-[5px] h-[5px] max-md:mt-10 max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-12 text-2xl text-black max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                Our mission is to provide personalized recruitment solutions
                that meet the specific needs of each employer and recruiter. We
                believe that by harnessing the latest AI technology, we can make
                the recruitment process more effective, saving time and
                resources for our clients.
              </div>
              <div className="shrink-0 mt-14 bg-purple-700 border-purple-700 border-solid border-[5px] h-[5px] max-md:mt-10 max-md:max-w-full" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={imagePath2}
              className="grow w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full"
              alt="Description of the image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
