import * as React from "react";

export default function Testemonials() {
  return (
    <div className="flex flex-col items-center p-20 text-xl font-semibold text-white bg-white max-md:px-5">
      <div className="mt-10 text-5xl font-extrabold text-black max-md:mt-10">
        Testemonials
      </div>
      <div className="shrink-0 mt-2.5 bg-purple-700 border-purple-700 border-solid border-[5px] h-[5px] w-[241px]" />
      <div className="flex gap-5 mt-20 w-full text-center max-w-[1098px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 my-auto max-w-full rounded-full aspect-[1.05] w-[120px]"
        />
        <div className="grow justify-center px-12 py-9 bg-purple-700 rounded-[46px] w-fit max-md:px-5 max-md:max-w-full">
          “KayaAI has revolutionized our recruitment process. The ability to
          create custom tests tailored to our specific needs, coupled with the
          AI analysis, has allowed us to find the perfect candidates quickly and
          efficiently.”
        </div>
      </div>
      <div className="flex gap-5 mt-5 w-full text-center max-w-[1098px] max-md:flex-wrap max-md:max-w-full">
        <div className="grow justify-center px-12 py-9 bg-purple-700 rounded-[46px] w-fit max-md:px-5 max-md:max-w-full">
          “KayaAI has revolutionized our recruitment process. The ability to
          create custom tests tailored to our specific needs, coupled with the
          AI analysis, has allowed us to find the perfect candidates quickly and
          efficiently.”
        </div>
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 my-auto max-w-full rounded-full aspect-[1.05] w-[120px]"
        />
      </div>
      <div className="flex gap-5 mt-8 w-full text-center max-w-[1098px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 my-auto max-w-full rounded-full aspect-[1.05] w-[120px]"
        />
        <div className="grow justify-center px-12 py-9 bg-purple-700 rounded-[46px] w-fit max-md:px-5 max-md:max-w-full">
          “KayaAI has revolutionized our recruitment process. The ability to
          create custom tests tailored to our specific needs, coupled with the
          AI analysis, has allowed us to find the perfect candidates quickly and
          efficiently.”
        </div>
      </div>
    </div>
  );
}


