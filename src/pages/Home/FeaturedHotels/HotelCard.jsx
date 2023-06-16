const HotelCard = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-[#003276] relative gallery-card text-white">
      {/* Card Image Background */}
      <img
        className="object-cover w-full h-full rounded-lg"
        src="https://i.ibb.co/dDpcyTT/class-2.png"
        alt="Hotel"
      />
      {/* Card Texts */}
      <div className="w-full h-full absolute top-0 bg-[#0031768a] gallery-body p-4 rounded-xl space-y-3 flex flex-col justify-center">
        <h2 className="lg:text-2xl font-bold uppercase">Reunion of Friends</h2>
        <p className="text-sm lg:text-base">
          Bring together old friends, families and colleagues who haven&apos;t
          seen each other in a long time. Our cozy and welcoming atmosphere is
          perfect for creating a memorable experience that will bring people
          together and create lasting connections.
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
