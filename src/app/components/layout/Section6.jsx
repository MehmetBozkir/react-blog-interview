"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Shoe from "/public/Section6Item/Shoe.svg";

const locations = [
  {
    id: 1,
    top: "15%",
    left: "44%",
    leftSmall: "42%",
    text: "Location 1 info",
    image: Shoe,
  },
  {
    id: 2,
    top: "30%",
    left: "39%",
    leftSmall: "32%",
    text: "Location 2 info",
    image: Shoe,
  },
  {
    id: 3,
    top: "38%",
    left: "25%",
    leftSmall: "23%",
    text: "Emma Simpson collected one pair of Cool Shoes",
    image: Shoe,
  },
  {
    id: 4,
    top: "47%",
    left: "30%",
    leftSmall: "28%",
    text: "Location 4 info",
    image: Shoe,
  },
  {
    id: 5,
    top: "52%",
    left: "78%",
    leftSmall: "76%",
    text: "Location 5 info",
    image: Shoe,
  },
  {
    id: 6,
    top: "55%",
    left: "71%",
    leftSmall: "69%",
    text: "Location 6 info",
    image: Shoe,
  },
  {
    id: 7,
    top: "67%",
    left: "57%",
    leftSmall: "55%",
    text: "Location 7 info",
    image: Shoe,
  },
  {
    id: 8,
    top: "71%",
    left: "41%",
    leftSmall: "39%",
    text: "Location 8 info",
    image: Shoe,
  },
  {
    id: 9,
    top: "75%",
    left: "80%",
    leftSmall: "78%",
    text: "Location 9 info",
    image: Shoe,
  },
  {
    id: 10,
    top: "76%",
    left: "38%",
    leftSmall: "36%",
    text: "Location 10 info",
    image: Shoe,
  },
];

export default function Section6() {
  const [activeLocation, setActiveLocation] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLocationClick = (location) => {
    setActiveLocation((prevLocation) =>
      prevLocation?.id === location.id ? null : location
    );
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-auto">
      <div className="relative min-w-[1200px] min-h-screen">
        <Image
          src="/Section6Item/Section6BG.svg"
          alt="World Map Image"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center md:justify-center text-center text-white">
          <div className="max-md:ml-24">
            <h1 className="text-5xl md:text-8xl font-bold">11,658,467</h1>
            <p className="text-3xl md:text-6xl font-extrabold mt-4">
              Shoes Collected
            </p>
          </div>
        </div>

        {locations.map((location) => (
          <button
            key={location.id}
            style={{
              top: location.top,
              left: `calc(${
                isSmallScreen ? location.leftSmall : location.left
              } - 2%)`,
            }}
            className={`absolute w-6 h-6 rounded-full border-4 border-lime-400 cursor-pointer transition-colors ${
              activeLocation?.id === location.id
                ? "bg-lime-200"
                : "bg-transparent"
            }`}
            onClick={() => handleLocationClick(location)}
          />
        ))}

        {activeLocation && (
          <div>
            <Image
              src={activeLocation.image}
              alt="Location Image"
              width={256}
              height={200}
              className=""
              style={{
                position: "absolute",
                top: `calc(${activeLocation.top} - 224px)`,
                left: `calc(${
                  isSmallScreen ? activeLocation.leftSmall : activeLocation.left
                } - 154px)`,
              }}
            />

            <div
              className="bg-neutral-300 w-52 rounded-b-lg px-4 h-12 items-center flex shadow-lg relative"
              style={{
                position: "absolute",
                top: `calc(${activeLocation.top} - 42px)`,
                left: `calc(${
                  isSmallScreen ? activeLocation.leftSmall : activeLocation.left
                } - 128px )`,
              }}
            >
              <p className="text-xs font-semibold">{activeLocation.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
