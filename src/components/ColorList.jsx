function ColorList() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-3xl font-bold text-blue-700 mb-4">
        Ranglar ro'yxati Komponenti
      </h3>
      <div className="bg-white p-5 w-full max-w-lg rounded-lg flex flex-wrap gap-3 justify-center">
        <div className="w-[80px] h-[80px] bg-red-500 flex items-center justify-center rounded-md">
          <p className="text-white text-center">Qizil</p>
        </div>
        <div className="w-[80px] h-[80px] bg-green-500 flex items-center justify-center rounded-md">
          <p className="text-white text-center">Yashil</p>
        </div>
        <div className="w-[80px] h-[80px] bg-blue-500 flex items-center justify-center rounded-md">
          <p className="text-white text-center">Moviy</p>
        </div>
        <div className="w-[80px] h-[80px] bg-yellow-500 flex items-center justify-center rounded-md">
          <p className="text-white text-center">Sariq</p>
        </div>
        <div className="w-[80px] h-[80px] bg-red-700 flex items-center justify-center rounded-md">
          <p className="text-white text-center">To'q qizil</p>
        </div>
      </div>
    </div>
  );
}

export default ColorList;
