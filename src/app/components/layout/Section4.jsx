"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

export default function Section4() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <section className="py-10 flex items-center justify-center relative w-full overflow-hidden">
      <div className="absolute top-[135px] md:top-[140px] w-full md:w-[94%] h-[277px] md:h-[421px] bg-amber-200"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex items-center justify-between px-20 mb-20 max-md:justify-center">
          <h2 className="text-black font-bold text-center text-3xl md:text-6xl">
            Because they love us
          </h2>
          <div className=" space-x-4 hidden md:flex">
            <button
              onClick={() => embla && embla.scrollPrev()}
              className="border border-amber-900 p-3 rounded-full text-amber-900 hover:bg-amber-900 hover:text-white"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => embla && embla.scrollNext()}
              className="border border-amber-900 p-3 rounded-full text-amber-900 hover:bg-amber-900 hover:text-white"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          className="embla overflow-hidden w-[24%] md:w-4/5 mx-auto"
          ref={emblaRef}
        >
          <div className="embla__container flex space-x-4 px-4 mb-2">
            <div className="embla__slide bg-white rounded-[20px] p-8 shadow-md flex flex-col justify-between md:w-[380px] md:h-[420px] w-[319px] h-[296px] flex-shrink-0">
              <div className="flex flex-col space-y-6 md:space-y-12">
                <div className="flex items-center">
                  <Image
                    src="/Section4Item/zoomerrLogo.svg"
                    alt="Zoomerr Logo"
                    width={133}
                    height={32}
                  />
                </div>
                <p className="text-black text-base md:text-2xl">
                  Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                  tellus, viverra turpis lorem. Varius a turpis urna id
                  porttitor.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/Section4Item/hellenAvatar.svg"
                  alt="Hellen Jummy"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <p className="text-black font-medium">Hellen Jummy</p>
                  <p className="text-gray-500 text-sm">Team Lead</p>
                </div>
              </div>
            </div>

            <div className="embla__slide bg-white rounded-[20px] p-8 shadow-md flex flex-col justify-between md:w-[380px] md:h-[420px] w-[319px] h-[296px] flex-shrink-0">
              <div className="flex flex-col space-y-6 md:space-y-12">
                <div className="flex items-center">
                  <Image
                    src="/Section4Item/shellsLogo.svg"
                    alt="Shells Logo"
                    width={133}
                    height={32}
                  />
                </div>
                <p className="text-black text-base md:text-2xl">
                  Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis
                  amet enim. Sit purus venenatis velit semper lectus sed ornare
                  quam nulla.
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <Image
                  src="/Section4Item/hellenaAvatar.svg"
                  alt="Hellena John"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <p className="text-black font-medium">Hellena John</p>
                  <p className="text-gray-500 text-sm">Co-founder</p>
                </div>
              </div>
            </div>

            <div className="embla__slide bg-white rounded-[20px] p-8 shadow-md flex flex-col justify-between md:w-[380px] md:h-[420px] w-[319px] h-[296px] flex-shrink-0">
              <div className="flex flex-col space-y-6 md:space-y-12">
                <div className="flex items-center">
                  <Image
                    src="/Section4Item/artvenueLogo.svg"
                    alt="ArtVenue Logo"
                    width={133}
                    height={32}
                  />
                </div>
                <p className="text-black text-base md:text-2xl">
                  A eget sed posuere dui risus habitasse mauris. Venenatis
                  aliquet id ultrices a lacus. Pretium vehicula pretium posuere
                  justo sed.
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <Image
                  src="/Section4Item/davidAvatar.svg"
                  alt="David Oshodi"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <p className="text-black font-medium">David Oshodi</p>
                  <p className="text-gray-500 text-sm">Manager</p>
                </div>
              </div>
            </div>

            <div className="embla__slide bg-white rounded-[20px] p-8 shadow-md flex flex-col justify-between md:w-[380px] md:h-[420px] w-[319px] h-[296px] flex-shrink-0">
              <div className="flex flex-col space-y-6 md:space-y-12">
                <div className="flex items-center">
                  <Image
                    src="/Section4Item/wavesLogo.svg"
                    alt="Waves Logo"
                    width={133}
                    height={32}
                  />
                </div>
                <p className="text-black text-base md:text-2xl">
                  Magna egestas aliquet ut integer non. Sed diam enim nibh sit.
                  Aliquam laoreet aenean metus nibh eu scelerisque.
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <Image
                  src="/Section4Item/charoletteAvatar.svg"
                  alt="Charolette Hanlin"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <p className="text-black font-medium">Charolette Hanlin</p>
                  <p className="text-gray-500 text-sm">CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
