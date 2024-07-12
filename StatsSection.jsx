import React from "react";

const StatsSection = () => {
  return (
    <section className="text-gray-600 body-font pb-10">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-xl mb-2 text-[#24355A] ">
              Join the Community
            </h1>
            <div className="leading-relaxed">
              Discover why so many students and bachelors choose our properties
              for their living needs. Our commitment to quality and community
              sets us apart.
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-[#24355A] ">
              3.5K
            </h2>
            <p className="leading-relaxed">Happy Residents</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-[#24355A] ">
              1.2K
            </h2>
            <p className="leading-relaxed">Properties Listed</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-[#24355A] ">
              500+
            </h2>
            <p className="leading-relaxed">New Listings Monthly</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-[#24355A] ">
              50
            </h2>
            <p className="leading-relaxed">Cities Covered</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src="https://i.pinimg.com/originals/7b/5f/53/7b5f53ec7ccfbaa41166e131d46bf495.jpg"
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
