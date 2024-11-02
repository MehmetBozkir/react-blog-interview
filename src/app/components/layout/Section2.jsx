import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

function Section2() {
  return (
    <section className="bg-slate-900 bg-cover bg-center flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl w-full flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-between mb-20 px-4 lg:px-0">
        <h2 className="text-2xl md:text-5xl font-bold text-white text-center md:text-left">
          The best of the best
        </h2>
        <button className="px-6 py-4 h-[64px] w-[233px] border-2 text-xl font-semibold border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition">
          Sign up now
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 left-0 z-0">
          <div className="hidden md:block h-[271px] w-[271px] rounded-[50px] border-none bg-pink-700 -left-8 bottom-28 opacity-75 absolute"></div>
          <div className="block md:hidden h-[202px] w-[202px] rounded-[50px] border-none bg-pink-700 left-6 top-[312px] opacity-75 absolute"></div>
          <div className="hidden md:block h-[161px] w-[161px] rounded-[50px] border-none bg-sky-700 -top-8 left-[412px] opacity-75 absolute"></div>
          <div className="block md:hidden h-[120px] w-[120px] rounded-[50px] border-none bg-sky-700 top-[654px] -right-4 opacity-75 absolute"></div>
          <div className="hidden lg:block h-[130px] w-[130px] rounded-[30px] border-none bg-amber-700 bottom-32 left-[705px] opacity-75 absolute"></div>
          <div className="hidden lg:block h-[202px] w-[202px] rounded-[30px] border-none bg-fuchsia-700 bottom-12 right-[100px] opacity-75 absolute"></div>
          <div className="hidden md:block h-[232px] w-[232px] rounded-[50px] border-none bg-green-700 top-8 -right-12 opacity-75 absolute"></div>
          <div className="block md:hidden h-[151px] w-[151px] rounded-[30px] border-none bg-fuchsia-700 -left-4 bottom-[280px] opacity-75 absolute"></div>
        </div>

        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10"
          style={{ marginBottom: "80px" }}
        >
          {["CardImage1.svg", "CardImage2.svg", "CardImage3.svg"].map(
            (image, index) => (
              <div
                key={index}
                className="bg-slate-900 shadow-lg shadow-white rounded-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 relative"
                style={{ width: "100%", maxWidth: "394.67px", height: "472px" }}
              >
                <img
                  src={`/Section2Item/${image}`}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 pb-20">
                  <h3 className="text-lg font-semibold text-white">Title</h3>
                  <p className="mt-2 text-white">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae
                    habitasse.
                  </p>
                </div>
                <button className="absolute bottom-6 font-semibold left-6 right-6 px-4 py-2 border-2 text-lg border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition flex items-center justify-center">
                  <RiShoppingCartLine className="mr-2" /> Buy Now
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Section2;
