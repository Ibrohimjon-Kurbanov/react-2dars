function AnimalGallery() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-3xl font-bold text-blue-700 mb-4">
        Hayvonlar galereyasi Komponenti
      </h3>
      <div className="bg-white p-5 w-full max-w-2xl rounded-lg flex gap-5">
        <div className="bg-white shadow-xl px-4 py-2 rounded-xl cursor-pointer">
          <h3 className="text-gray-700 text-[20px] text-semibold font-semibold">
            It 🐶
          </h3>
        </div>
        <div className="bg-white shadow-xl px-4 py-2 rounded-xl cursor-pointer">
          <h3 className="text-gray-700 text-[20px] text-semibold font-semibold">
            Mushuk 🐱
          </h3>
        </div>
        <div className="bg-white shadow-xl px-4 py-2 rounded-xl cursor-pointer">
          <h3 className="text-gray-700 text-[20px] text-semibold font-semibold">
            Fil 🐘
          </h3>
        </div>
        <div className="bg-white shadow-xl px-4 py-2 rounded-xl cursor-pointer">
          <h3 className="text-gray-700 text-[20px] text-semibold font-semibold">
            Sher 🦁
          </h3>
        </div>
        <div className="bg-white shadow-xl px-4 py-2 rounded-xl cursor-pointer">
          <h3 className="text-gray-700 text-[20px] text-semibold font-semibold">
            Qush 🐦
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AnimalGallery;
