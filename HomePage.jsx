import Slide from "../components/Slide";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import CategoriesCarousel from "../components/categoriesCarousel";
import SearchSection from "../components/SearchSection";
import USPsection from "../components/USPsection";
import StatsSection from "../components/StatsSection";
import Listings from "../components/Listings";

const HomePage = () => {
  return (
    <>
      <CategoriesCarousel />
      <Slide />
      <Categories />
      <Listings />
      <USPsection />
      <StatsSection />
      <Footer />
    </>
  );
};

export default HomePage;
