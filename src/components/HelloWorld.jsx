function HelloWorld() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-3xl font-bold text-blue-700 mb-4">
        Salom, Dunyolar! Komponenti
      </h3>
      <div className="bg-white p-5 w-full max-w-sm rounded-lg">
        <p className="text-lg  text-gray-500 font-semibold mb-3">
          <span className=" text-gray-700 font-bold">Inglizcha:</span> Hello,
          World!
        </p>
        <p className="text-lg text-gray-500 font-semibold mb-3">
          <span className=" text-gray-700 font-bold ">O'zbekcha:</span> Salom,
          Dunyo!
        </p>
        <p className="text-lg text-gray-500 font-semibold mb-3">
          <span className=" text-gray-700 font-bold ">Ruscha:</span> Привет,
          Мир!
        </p>
        <p className="text-lg text-gray-500 font-semibold ">
          <span className=" text-gray-700 font-bold ">Yaponcha:</span>{" "}
          こんにちは、世界！
        </p>
      </div>
    </div>
  );
}

export default HelloWorld;
