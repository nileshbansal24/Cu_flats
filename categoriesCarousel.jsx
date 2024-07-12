import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Link } from "react-router-dom";
import { Box, Button, Popover } from "@mui/material";
import { ChevronDown, MoveRight } from "lucide-react";

const CategoriesCarousel = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  const slides = [
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "1 BHK",
    },
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "2 BHK",
    },
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "3 BHK",
    },
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "4 BHK",
    },
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "5 BHK",
    },
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "Kothi",
    },
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "PG",
    },
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "Shivjot",
    },
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "GBP Crest",
    },
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "Omega City",
    },
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "Darpan Greens",
    },
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "White Towers",
    },
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "Amayra Greens",
    },
    {
      imageUrl: "http://dummy-images.com/abstract/dummy-576x1024-Mosque.jpg",
      title: "PG",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true }),
  ]);

  const handleMouseEnter = () => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll && autoScroll.isPlaying()) {
      autoScroll.stop();
    }
  };

  const handleMouseLeave = () => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll && !autoScroll.isPlaying()) {
      autoScroll.play();
    }
  };

  return (
    <div className="border-t relative">
      <div className="hidden md:flex w-full items-center justify-evenly bg-violet-600 text-white">
        <div className="flex items-center justify-between w-2/3 relative z-[200]">
          <button
            aria-describedby={"simple-popover"}
            variant="contained"
            className="relative flex items-center gap-x-2 hover:translate-y-[-2px] font-semibold py-3 h-full transition-all duration-200"
            onMouseEnter={() => setAnchorEl(true)}
            onMouseLeave={() => setAnchorEl(false)}
          >
            Categories{" "}
            <div
              className={`${
                anchorEl && "rotate-180 transition-all duration-200"
              }`}
            >
              <ChevronDown size={20} color="white" />
            </div>
            {anchorEl && (
              <div className="absolute top-full left-0 bg-white z-50 w-56 rounded-lg shadow-xl">
                <div className="p-5 bg-white rounded-lg">
                  <div className="flex flex-col gap-y-2">
                    <Link
                      className="text-md border-b font-large flex items-center justify-between"
                      to=""
                    >
                      <div className="text-[#24355A] ">1 BHK</div>
                      <div>
                        <MoveRight size={20} color="black" />
                      </div>
                    </Link>
                    <Link
                      className="text-md border-b font-large flex items-center justify-between"
                      to=""
                    >
                      <div className="text-[#24355A]">2 BHK</div>
                      <div>
                        <MoveRight size={20} color="black" />
                      </div>
                    </Link>
                    <Link
                      className="text-md border-b font-large flex items-center justify-between"
                      to=""
                    >
                      <div className="text-[#24355A]">3 BHK</div>
                      <div>
                        <MoveRight size={20} color="black" />
                      </div>
                    </Link>
                    <Link
                      className="text-md border-b font-large flex items-center justify-between"
                      to=""
                    >
                      <div className="text-[#24355A]">PG</div>
                      <div>
                        <MoveRight size={20} color="black" />
                      </div>
                    </Link>
                    <Link
                      className="text-md border-b font-large flex items-center justify-between"
                      to=""
                    >
                      <div className="text-[#24355A]"> Villas</div>
                      <div>
                        <MoveRight size={20} color="black" />
                      </div>
                    </Link>
                    <Link
                      className="text-md border-b font-large flex items-center justify-between"
                      to=""
                    >
                      <div className="text-[#24355A]">Studio Rooms</div>
                      <div>
                        <MoveRight size={20} color="black" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </button>

          <Link
            className="hover:translate-y-[-2px] font-semibold py-3 h-full transition-all duration-200"
            to=""
          >
            About Us
          </Link>
          <Link
            className="hover:translate-y-[-2px] font-semibold py-3 h-full transition-all duration-200"
            to=""
          >
            Contact Us
          </Link>
          <Link
            className="hover:translate-y-[-2px] font-semibold py-3 h-full transition-all duration-200"
            to=""
          >
            Listings
          </Link>
          <Link
            className="hover:translate-y-[-2px] font-semibold py-3 h-full transition-all duration-200"
            to=""
          >
            Privacy Policy
          </Link>
        </div>
      </div>
      <div
        className="overflow-hidden py-3"
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-row items-center">
          {slides.map((slide, index) => (
            <div className="px-8 flex w-full items-center gap-x-2" key={index}>
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="h-full w-full object-fit"
                />
              </div>
              <Link
                to={`properites/${index}`}
                className="flex whitespace-nowrap underline-animation"
              >
                {slide.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesCarousel;
