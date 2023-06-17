import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import CityCard from "./CityCard";

const TopCities = () => {
  const [topCities, setTopCities] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/top-cities").then((res) => {
      setTopCities(res.data);
    });
  }, []);
  return (
    <div className="">
      <h3 className="text-2xl lg:text-3xl font-semibold text-center">
        Top Cities
      </h3>
      <div className="lg:w-3/4 lg:mx-auto mx-10 grid lg:grid-cols-3 gap-4 mt-10">
        {topCities.map((city) => (
          <CityCard key={city._id} city={city}></CityCard>
        ))}
      </div>
    </div>
  );
};

export default TopCities;
