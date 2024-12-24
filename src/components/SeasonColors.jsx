function SeasonColors() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-3xl font-bold text-blue-700 mb-4">
        Fasl ranglari Komponenti
      </h3>
      <div className="bg-white p-5 w-full max-w-lg rounded-lg flex flex-wrap gap-3 justify-center">
        <div className="w-[80px] h-[80px] bg-green-500 flex items-center justify-center rounded-md">
          <p className="text-white text-center">Bahor</p>
        </div>
        <div className="w-[80px] h-[80px] bg-yellow-400 flex items-center justify-center rounded-md">
          <p className="text-white text-center">Yoz</p>
        </div>
        <div className="w-[80px] h-[80px] bg-yellow-600 flex items-center justify-center rounded-md">
          <p className="text-white text-center">Kuz</p>
        </div>
        <div className="w-[80px] h-[80px] bg-blue-500 flex items-center justify-center rounded-md">
          <p className="text-white text-center">Qish</p>
        </div>
      </div>
    </div>
  );
}

export default SeasonColors;
