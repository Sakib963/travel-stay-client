import HotelCard from "./HotelCard";

const FeaturedHotels = () => {
  return (
    <div className="my-20">
      <h3 className="text-2xl lg:text-3xl font-semibold text-center">
        Featured Hotels
      </h3>
      <div className="lg:w-3/4 lg:mx-auto mx-10 grid lg:grid-cols-3 gap-4 mt-10">
        <HotelCard></HotelCard>
        <HotelCard></HotelCard>
        <HotelCard></HotelCard>
        <HotelCard></HotelCard>
        <HotelCard></HotelCard>
        <HotelCard></HotelCard>
      </div>
    </div>
  );
};

export default FeaturedHotels;
