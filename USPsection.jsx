import React from "react";
import { Link } from "react-router-dom";

const USPsection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-24 pb-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-600">
            Why Choose Us?
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            At XYZ Real Estate, we pride ourselves on providing exceptional
            service and unique offerings that set us apart. Discover what makes
            us the preferred choice for your next living space:
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full my-2 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-[#24355A] ">
              Quality Properties
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Explore a diverse range of well-maintained and quality-checked
              properties suitable for students and bachelors.
            </p>
            <Link
              to="/about-us"
              className="text-purple-600 inline-flex items-center hover:text-purple-700"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full my-2 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-[#24355A] ">
              Transparent Process
            </h2>
            <p className="leading-relaxed text-base mb-4">
              We believe in transparency and clarity throughout the renting
              process, ensuring your peace of mind.
            </p>
            <Link
              to="/about-us"
              className="text-purple-600 inline-flex items-center hover:text-purple-700"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full my-2 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl  font-medium title-font mb-2 text-[#24355A] ">
              Community Focused
            </h2>
            <p className="leading-relaxed text-base mb-4">
              We foster a community-oriented approach, offering properties in
              vibrant neighborhoods with access to essential amenities.
            </p>
            <Link
              to="/about-us"
              className="text-purple-600 inline-flex items-center hover:text-purple-700"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full my-2 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-[#24355A]  font-medium title-font mb-2">
              Customer Satisfaction
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Our dedicated team is committed to ensuring your satisfaction,
              providing support and assistance at every step.
            </p>
            <Link
              to="/about-us"
              className="text-purple-600 inline-flex items-center hover:text-purple-700"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
        <Link
          to="contact-us"
          className="flex w-max mx-auto mt-16 text-white bg-purple-600 border-0 py-2 px-8 focus:outline-none hover:bg-purple-700 rounded text-lg"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default USPsection;
