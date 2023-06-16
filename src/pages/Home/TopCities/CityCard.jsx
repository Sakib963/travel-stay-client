const CityCard = () => {
  return (
    <div className="card shadow-xl border">
      <figure>
        <img
          src="https://i.ibb.co/dDpcyTT/class-2.png"
          className="w-full"
          alt="City"
        />
      </figure>
      <div className="card-body">
        <div className="block lg:flex justify-between space-y-1 lg:space-y-0">
          <h2 className="card-title">New York!</h2>
          <div className="card-actions">
            <div className="badge badge-lg bg-[#003276] text-white p-3">
              85 Hotels & Rooms
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
