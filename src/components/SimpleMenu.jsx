function SimpleMenu() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-3xl font-bold text-blue-700 mb-4">
        Oddiy menyu Komponenti
      </h3>
      <nav className="bg-gray-700 text-white p-5 w-full max-w-lg rounded-lg flex flex-col items-center">
        <ul className="flex items-center gap-4">
          <li>
            <a
              className="text-[18px] font-medium tracking-wide hover:text-yellow-400 transition-colors"
              href="#"
            >
              Bosh sahifa
            </a>
          </li>
          <li>
            <a
              className="text-[18px] font-medium tracking-wide hover:text-yellow-400 transition-colors"
              href="#"
            >
              Biz haqimizda
            </a>
          </li>
          <li>
            <a
              className="text-[18px] font-medium tracking-wide hover:text-yellow-400 transition-colors"
              href="#"
            >
              Aloqa
            </a>
          </li>
          <li>
            <a
              className="text-[18px] font-medium tracking-wide hover:text-yellow-400 transition-colors"
              href="#"
            >
              Yangiliklar
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SimpleMenu;
