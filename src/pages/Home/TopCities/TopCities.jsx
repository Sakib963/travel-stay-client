import CityCard from "./CityCard";

const TopCities = () => {
  return (
    <div className="">
      <h3 className="text-2xl lg:text-3xl font-semibold text-center">
        Top Cities
      </h3>
      <div className="lg:w-3/4 lg:mx-auto mx-10 grid lg:grid-cols-3 gap-4 mt-10">
        <CityCard></CityCard>
        <CityCard></CityCard>
        <CityCard></CityCard>
      </div>
    </div>
  );
};

export default TopCities;
