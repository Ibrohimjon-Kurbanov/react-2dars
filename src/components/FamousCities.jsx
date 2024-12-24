function FamousCities() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-3xl font-bold text-blue-700 mb-4">
        Mashhur shaharlar Komponenti
      </h3>
      <div className="bg-white p-5 w-full max-w-sm rounded-lg">
        <p className="text-lg  text-gray-700 font-semibold mb-3 tracking-wider">
          <span className=" text-black font-bold"> Parij - </span>
          Fransiya
        </p>
        <p className="text-lg text-gray-700 font-semibold mb-3 tracking-wider">
          <span className=" text-black font-bold "> Tokio - </span>
          Yaponiya
        </p>
        <p className="text-lg text-gray-700 font-semibold mb-3 tracking-wider">
          <span className=" text-black font-bold "> Nyu-York - </span> AQSh
        </p>
        <p className="text-lg text-gray-700 font-semibold mb-3 tracking-wider">
          <span className=" text-black font-bold "> London - </span> Angliya
        </p>
        <p className="text-lg text-gray-700 font-semibold tracking-wider">
          <span className=" text-black font-bold "> Toshkent - </span>
          O'zbekiston
        </p>
      </div>
    </div>
  );
}

export default FamousCities;
