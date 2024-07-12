import { useEffect, useState } from "react";
import { categories } from "../data";
import "../styles/Listings.scss";
import ListingCard from "./ListingCard";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "../redux/state";
import { Link } from "react-router-dom";

const Listings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All");

  // const listings = useSelector((state) => state.listings);
  const listings = [
    {
      _id: "2",
      creator: "Jane Smith",
      listingPhotoPaths: ["/images/house2.jpg"],
      city: "San Francisco",
      province: "CA",
      country: "USA",
      category: "Studio Apartments",
      type: "Studio",
      price: "$1200/month",
      booking: false,
    },
    {
      _id: "1",
      creator: "John Doe",
      listingPhotoPaths: ["/images/house1.jpg"],
      city: "New York",
      province: "NY",
      country: "USA",
      category: "Furnished Rentals",
      type: "Apartment",
      price: "$1500/month",
      booking: true,
    },
    {
      _id: "2",
      creator: "Jane Smith",
      listingPhotoPaths: ["/images/house2.jpg"],
      city: "San Francisco",
      province: "CA",
      country: "USA",
      category: "Studio Apartments",
      type: "Studio",
      price: "$1200/month",
      booking: false,
    },
    {
      _id: "1",
      creator: "John Doe",
      listingPhotoPaths: ["/images/house1.jpg"],
      city: "New York",
      province: "NY",
      country: "USA",
      category: "Furnished Rentals",
      type: "Apartment",
      price: "$1500/month",
      booking: true,
    },
    {
      _id: "2",
      creator: "Jane Smith",
      listingPhotoPaths: ["/images/house2.jpg"],
      city: "San Francisco",
      province: "CA",
      country: "USA",
      category: "Studio Apartments",
      type: "Studio",
      price: "$1200/month",
      booking: false,
    },
    {
      _id: "1",
      creator: "John Doe",
      listingPhotoPaths: ["/images/house1.jpg"],
      city: "New York",
      province: "NY",
      country: "USA",
      category: "Furnished Rentals",
      type: "Apartment",
      price: "$1500/month",
      booking: true,
    },
    {
      _id: "2",
      creator: "Jane Smith",
      listingPhotoPaths: ["/images/house2.jpg"],
      city: "San Francisco",
      province: "CA",
      country: "USA",
      category: "Studio Apartments",
      type: "Studio",
      price: "$1200/month",
      booking: false,
    },
    {
      _id: "1",
      creator: "John Doe",
      listingPhotoPaths: ["/images/house1.jpg"],
      city: "New York",
      province: "NY",
      country: "USA",
      category: "Furnished Rentals",
      type: "Apartment",
      price: "$1500/month",
      booking: true,
    },
    {
      _id: "2",
      creator: "Jane Smith",
      listingPhotoPaths: ["/images/house2.jpg"],
      city: "San Francisco",
      province: "CA",
      country: "USA",
      category: "Studio Apartments",
      type: "Studio",
      price: "$1200/month",
      booking: false,
    },
  ];

  const getFeedListings = async () => {
    try {
      const response = await fetch(
        selectedCategory !== "All"
          ? `http://localhost:3001/properties?category=${selectedCategory}`
          : "http://localhost:3001/properties",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);
    }
  };

  useEffect(() => {
    getFeedListings();
  }, [selectedCategory]);

  return (
    <>
      <section className="text-gray-600 body-font pt-10">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-[#24355A]  font-medium title-font text-2xl mb-2 sm:mb-0">
                Featured Properties
              </h1>
              <p className="hidden md:block sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Discover our handpicked selection of featured rental properties
                that offer exceptional comfort and convenience. These properties
                are perfect for students and bachelors seeking quality living
                spaces. Explore our top recommendations and find your next home
                today.
              </p>
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className="listings pb-24">
              {listings.map(
                ({
                  _id,
                  creator,
                  listingPhotoPaths,
                  city,
                  province,
                  country,
                  category,
                  type,
                  price,
                  booking = false,
                }) => (
                  <ListingCard
                    listingId={_id}
                    creator={creator}
                    listingPhotoPaths={[
                      "https://www.bankrate.com/2019/08/27171217/5-tips-for-financing-for-investment-property.jpeg?auto=webp&optimize=high&crop=16:9",
                      "https://www.bankrate.com/2019/08/27171217/5-tips-for-financing-for-investment-property.jpeg?auto=webp&optimize=high&crop=16:9",
                      "https://www.bankrate.com/2019/08/27171217/5-tips-for-financing-for-investment-property.jpeg?auto=webp&optimize=high&crop=16:9",
                      "https://www.bankrate.com/2019/08/27171217/5-tips-for-financing-for-investment-property.jpeg?auto=webp&optimize=high&crop=16:9",
                    ]}
                    city={city}
                    province={province}
                    country={country}
                    category={category}
                    type={type}
                    price={price}
                    booking={booking}
                  />
                )
              )}
            </div>
          )}
          {!loading && (
            <div className="w-full grid place-items-center">
              <Link
                to="/listings"
                className="text-center px-5 py-2 rounded bg-purple-600 hover:bg-purple-700 font-semibold text-lg text-white mt-5"
              >
                View More
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Listings;
