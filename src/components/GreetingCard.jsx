function GreetingCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-3xl font-bold text-blue-700 mb-4">
        Tabriklash kartasi Komponenti
      </h3>
      <div className="bg-orange-500 p-5 rounded-md text-center shadow-lg">
        <h4 className="text-2xl font-bold text-white mb-3">
          Tug'ilgan kuning bilan!
        </h4>
        <p className="text-white text-[16px] mb-3 font-medium">
          Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Quos,
          voluptatum!
        </p>
        <p className="text-5xl">🎉 🎂</p>
      </div>
    </div>
  );
}

export default GreetingCard;
