const CityCard = ({ city }) => {
  const { cityName, image, numberOfHotels } = city;
  return (
    <div className="card shadow-xl border transition ease-in-out delay-150 hover:scale-105 duration-300">
      <figure>
        <img src={image} className="w-full" alt="City" />
      </figure>
      <div className="card-body">
        <div className="block lg:flex justify-between space-y-1 lg:space-y-0">
          <h2 className="card-title">{cityName}</h2>
          <div className="card-actions">
            <div className="badge badge-lg bg-[#003276] text-white p-3">
              {numberOfHotels} Hotels & Rooms
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
