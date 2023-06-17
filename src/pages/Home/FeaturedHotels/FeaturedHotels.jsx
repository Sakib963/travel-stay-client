import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import HotelCard from "./HotelCard";

const FeaturedHotels = () => {
  const [axiosSecure] = useAxiosSecure();

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/featured-hotels")
      .then((res) => {
        setHotels(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="my-20">
      <h3 className="text-2xl lg:text-3xl font-semibold text-center">
        Featured Hotels
      </h3>
      <div className="lg:w-3/4 lg:mx-auto mx-10 grid lg:grid-cols-3 gap-4 mt-10">
        {hotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel}></HotelCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedHotels;
