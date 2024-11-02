import Image from "next/image";
import { LuPlayCircle } from "react-icons/lu";

const Section1 = () => {
  return (
    <section className=" max-md:bg-white relative overflow-hidden">
      <div className="relative text-center md:text-start max-w-screen-xl mx-auto z-30">
        <div className="grid grid-cols-1 place-items-center md:place-items-start lg:grid-cols-[1.5fr_1fr] gap-20 my-12 md:my-20">
          <div className="space-y-8 flex flex-col justify-center md:mt-12">
            <h2 className="font-extrabold text-5xl md:text-6xl leading-[110%] text-black">
              Collectible Sneakers
            </h2>
            <p className="text-md leading-[160%] max-md:px-4 text-black">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
            <div className="flex items-center justify-center px-[7px] md:px-0 md:justify-start gap-4">
              <button className="font-medium border-amber-900 px-6 py-3 border-2 rounded-lg text-amber-900 hover:bg-amber-900 hover:text-white">
                Sign up now
              </button>
              <button className="flex items-center text-[#632300] hover:text-black">
                <LuPlayCircle className="mr-2 text-xl" />
                <span className="font-medium">Watch Demo</span>
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="bg-amber-400 rounded-[50px] absolute top-0 left-0 w-full h-full scale-x-75 mt-10"></div>
            <Image
              src="/Section1Item/OneShoes.svg"
              alt="Nike Shoes Image"
              width={480}
              height={380}
              className="relative z-10"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 py-12 mt-24 md:py-20 md:mt-0 max-md:px-8">
          <div className="text-center">
            <img
              src="/Section1Item/Cup.svg"
              alt="Cup Icon"
              className="w-24 h-20 max-md:mx-auto"
            />
            <h3 className="font-semibold text-lg md:text-left text-black">
              Nibh viverra
            </h3>
            <p className="text-slate-900  md:text-left text-lg">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>

          <div className="text-center">
            <img
              src="/Section1Item/Bread.svg"
              alt="Bread Icon"
              className="w-24 h-16 max-md:mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg md:text-left text-black">
              Cursus amet
            </h3>
            <p className="text-slate-900 text-lg md:text-left">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/Section1Item/TV.svg"
              alt="TV Icon"
              className="w-24 h-16 max-md:mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg md:text-left text-black">
              Ipsum fermentum
            </h3>
            <p className="text-slate-900 text-lg md:text-left">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-100 absolute inset-0 bottom-0 left-0 w-full h-full trapezoid md:square z-20"></div>
    </section>
  );
};

export default Section1;
