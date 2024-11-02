"use client"
import React, { useState } from "react";
import { FaDesktop, FaArrowRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import SurgePatterns from "../piece/SurgePatterns";
import { RiShieldCheckLine } from "react-icons/ri";
import { TbRocket } from "react-icons/tb";
import { BiPodcast } from "react-icons/bi";
import { HiAdjustments } from "react-icons/hi";

const collectionList = [
  { icon: <FiSearch />, title: "Bibendum tellus", href: "#" },
  { icon: <RiShieldCheckLine />, title: "Cras eget", href: "#" },
  { icon: <TbRocket />, title: "Dolor pharetra", href: "#" },
  { icon: <FaDesktop />, title: "Amet fringilla", href: "#" },
  { icon: <BiPodcast />, title: "Amet nibh", href: "#" },
  { icon: <HiAdjustments />, title: "Sed velit", href: "#" },
];

const Section5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto inner-container py-20">
        <div className="space-y-8 lg:space-y-20">
          <div className="space-y-8 text-center md:text-start">
            <h2 className="text-3xl md:text-5xl font-extrabold text-black">
              Grow Your Collection
            </h2>
            <p className="text-sm md:text-lg font-normal leading-[140%] max-md:px-3 text-black">
              Enim neque massa porta adipiscing elit. Sem libero id faucibus
              nibh amet dictum pellentesque sed. Eu non turpis risus odio
              sapien, fames sit rhoncus. Nec magna sed interdum sit purus
              tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3.68fr] gap-8 lg:gap-20 z-20 max-md:px-4 md:max-w-screen-lg  2xl:max-w-full">
            <ul className="space-x-4 md:space-x-0 md:space-y-4 flex flex-1 flex-row lg:flex-col overflow-auto lg:overflow-hidden">
              {collectionList.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-shrink-0 items-center space-x-4 p-4 rounded-lg ${
                    activeIndex === index ? "bg-white shadow-lg" : "hover:bg-white group"
                  }`}
                >
                  <div className="w-6 h-6 flex items-center text-2xl text-black">
                    {item.icon}
                  </div>
                  <span className="font-medium text-lg text-black">{item.title}</span>
                  {activeIndex === index && (
                    <FaArrowRight className="block text-black" />
                  )}
                </li>
              ))}
            </ul>

            <div className="relative sm:mr-4 md:mr-0">
              <div className="rounded-[20px] w-[295px] sm:min-w-full lg:max-w-[759px] relative z-10 bg-white h-fit">
                <div className="z-20 bg-white rounded-[20px]">
                  <div className="flex gap-[5px] p-4">
                    <div className="w-2 h-2 rounded-full bg-rose-600"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="relative h-[160px] md:h-[410px] max-w-[459px]">
                    <Image
                      src="/Section5Item/Photo1.svg"
                      alt="Desk Photo-1"
                      className="rounded-b-[20px] pb-[6px] px-[6px] object-cover"
                      fill
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] w-[295px] sm:min-w-full lg:max-w-[759px]  z-10 bg-white h-fit absolute left-[36px] top-[57px] lg:left-[94px] lg:top-[105px]">
                <div className="z-20 bg-white rounded-[20px]">
                  <div className="flex gap-[5px] p-4">
                    <div className="w-2 h-2 rounded-full bg-rose-600"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="relative h-[160px] md:h-[410px]">
                    <Image
                      src="/Section5Item/Photo2.svg"
                      alt="Desk Photo-2"
                      className="rounded-b-[20px] pb-[6px] px-[6px] object-cover"
                      fill
                    />
                  </div>
                </div>
                <div className="shadow-macCard absolute top-[64px] md:top-[97px] -right-[25px] md:-right-[91px] bg-white rounded-[10px] z-30">
                  <div className="relative h-[105px] md:h-[286px] w-[94px] md:w-[256px]">
                    <Image
                      src="/Section5Item/Photo3.svg"
                      alt="Desk Photo-3"
                      fill
                      className="object-cover p-[6px] rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SurgePatterns/>
    </section>
  );
};

export default Section5;
