"use client"
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const Section3 = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 pb-12 md:pb-0">
        <div className="rounded-3xl bg-white shadow-lg mt-4 mb-14 md:my-40 py-8 px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-2">
          <div className="space-y-6 flex flex-col justify-center items-center md:items-start">
            <h2 className="text-3xl md:text-5xl font-extrabold text-black">Why join us</h2>
            <ul>
              {[
                "Est et in pharetra magna adipiscing ornare aliquam.",
                "Tellus arcu sed consequat ac velit ut eu blandit.",
                "Ullamcorper ornare in et egestas dolor orci.",
              ].map((text, index) => (
                <li key={index} className="flex items-start md:items-center space-x-2">
                  <div className="w-6 h-6 flex items-center justify-center text-green-700">
                    <FaCheck />
                  </div>
                  <span className="leading-5 md:leading-7 text-black">{text}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 px-6 py-3 z-20 border-2 font-medium border-[#632300] text-[#632300] rounded-lg hover:bg-[#632300] hover:text-white transition">
            Sign up now
          </button>
          </div>

          <div className="mt-8 md:my-10 relative">
            <div className="rounded-2xl w-full relative z-10 bg-white h-fit">
              <div className="z-20 bg-white shadow-md shadow-black rounded-2xl">
                <div className="flex gap-1 p-4">
                  <div className="w-2 h-2 rounded-full bg-rose-600"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="relative h-[193px] md:h-[309px]">
                  <Image
                    src="/Section3Item/thumbnail.svg"
                    alt="Video Thumbnail"
                    className="rounded-b-2xl pb-1.5 px-1.5 object-cover"
                    fill
                  />
                </div>
              </div>
              <div className="absolute inset-0 -z-10 -top-[14px] md:-top-[4px] -left-[72px]">
        <div className="bg-amber-700 w-[55px] h-[55px] md:w-[90px] md:h-[90px] left-12 md:left-14 top-6 rounded-[30px] absolute opacity-75"></div>
        <div className="bg-amber-200 w-[411px] h-[134px] md:w-[666px] md:h-[218px] shadow-macCard -rotate-45 left-0 md:left-2 top-[70px] absolute">
          <div className="bg-sky-700 w-[36px] h-[36px] md:w-[60px] md:h-[60px] rounded-[50px] absolute top-[60px] md:top-[114px] -translate-y-1/2 right-0 translate-x-1/2 opacity-75"></div>
        </div>
        <div className="bg-fuchsia-700 w-[45px] h-[45px] md:w-[74px] md:h-[74px] rounded-[30px] absolute -bottom-5 right-[56px] md:-bottom-11 md:right-16 opacity-75"></div>
        <div className="bg-pink-700 w-[135px] h-[135px] md:w-[218px] md:h-[218px] rounded-[50px] absolute -bottom-[60px] -right-[25px] md:-bottom-[110px] md:-right-[118px] opacity-75"></div>
      </div>
      <div className="bg-green-700 w-[50px] h-[50px] md:w-[85px] md:h-[85px] rounded-[50px] absolute bottom-[-19px] left-[43px] md:bottom-[-37px] md:left-[70px] z-30 opacity-75"></div>
      <div className="w-36 h-36 rounded-full bg-black/10 absolute left-1/2 top-[calc(50%+20px)] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <button>
              <Image
                    src="/Section3Item/Icon.svg"
                    alt="Start Button Icon"
                    fill
                  />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
