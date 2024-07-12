import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/LSstate";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Slide = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <section className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.unsplash.com/photo-1604014237800-1c9102c219da"
          alt="Real Estate"
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl 2xl:max-w-[1800px]">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Cu Flats
          </p>
          <h2 className="text-[#24355A] mb-5 font-sans text-3xl 2xl:text-5xl sm:text-4xl sm:leading-none">
            <h2 className="whitespace-nowrap font-bold tracking-tight">
              Find Your Perfect Home
            </h2>
            <h2 className="whitespace-nowrap font-bold tracking-tight">
              for Study and Living
              <span className="inline-block text-purple-400"> Today</span>
            </h2>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg 2xl:text-xl">
            Discover our premium rental properties tailored for students and
            bachelors. Enjoy modern amenities, convenient locations, and
            affordable prices. Experience a comfortable and hassle-free living
            experience with Cu Flats.
          </p>
          <div className="flex items-center">
            <button
              onClick={
                !user
                  ? () => dispatch(openModal({ modalName: "SIGNUP" }))
                  : null
              }
              className="2xl:text-xl inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
            <Link
              to="/"
              aria-label=""
              className="2xl:text-xl inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
