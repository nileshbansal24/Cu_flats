import "../styles/Categories.scss";
import { Link } from "react-router-dom";
import { Building2, Castle, House, Sofa } from "lucide-react";
const Categories = () => {
  const categoriesData = [
    {
      title: "Furnished Rentals",
      icon: Sofa,
      imgUrl:
        "https://images.pexels.com/photos/7546548/pexels-photo-7546548.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Studio Apartments",
      icon: Building2,
      imgUrl:
        "https://images.pexels.com/photos/7546548/pexels-photo-7546548.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Paying Guest",
      icon: House,
      imgUrl:
        "https://images.pexels.com/photos/7546548/pexels-photo-7546548.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Villas",
      icon: Castle,
      imgUrl:
        "https://images.pexels.com/photos/7546548/pexels-photo-7546548.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];
  return (
    <div className="flex items-start md:items-center flex-col sm:flex-row  md:pt-10 lg:pt-20 px-5 md:px-10 lg:px-20">
      <div className="px-5 md:flex md:flex-col items-start justify-center">
        <h1 className="text-4xl pr-5 font-semibold whitespace-nowrap text-[#24355A]  ">
          Options for the <br />
          urban look!
        </h1>
        <p>
          Explore our wide range of rentals <br /> that cater to all needs.
        </p>
      </div>

      <div className="p-5 md:p-0 grid grid-cols-2 lg:grid-cols-4 w-full gap-4">
        {categoriesData.map((category, index) => (
          <Link to={`/properties/category/${category.title}`} key={index}>
            <div
              className="w-full h-56 md:h-max relative flex flex-col items-center justify-center overflow-hidden rounded overflow-hidden"
              key={index}
            >
              <img
                className="w-full h-56 md:w-58 xl:h-80 rounded"
                src={category.imgUrl}
                alt={category.title}
              />
              <div className="absolute top-2 lg:top-5 left-0 bg-white p-2 lg:px-4 md:py-1 w-max">
                <p className="text-xs lg:text-md xl:text-lg text-[#24355A] ">
                  {category.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
