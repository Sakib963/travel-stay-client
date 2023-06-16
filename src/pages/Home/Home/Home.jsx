import Banner from "../Banner/Banner";
import Explore from "../Explore/Explore";
import FeaturedHotels from "../FeaturedHotels/FeaturedHotels";
import TopCities from "../TopCities/TopCities";

const Home = () => {
    return (
        <div>
            <Banner></Banner>     
            <Explore></Explore>
            <TopCities></TopCities>
            <FeaturedHotels></FeaturedHotels>
        </div>
    );
};

export default Home;