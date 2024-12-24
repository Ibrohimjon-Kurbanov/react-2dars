function WeekDays() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-3xl font-bold text-blue-700 mb-4">
        Hafta kunlari Komponenti
      </h3>
      <div className="bg-white p-5 w-full max-w-xs rounded-lg shadow-lg">
        <ul className="flex  flex-col gap-y-3">
          <li className="bg-white p-2 border-2 rounded-md ">Dushanba</li>
          <li className="bg-white p-2 border-2 rounded-md ">Seshanba</li>
          <li className="bg-white p-2 border-2 rounded-md ">Chorshanba</li>
          <li className="bg-white p-2 border-2 rounded-md ">Payshanba</li>
          <li className="bg-white p-2 border-2 rounded-md ">Juma</li>
          <li className="bg-white p-2 border-2 rounded-md ">Shanba</li>
          <li className="bg-white p-2 border-2 rounded-md ">Yakshanba</li>
        </ul>
      </div>
    </div>
  );
}

export default WeekDays;
