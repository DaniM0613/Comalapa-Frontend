function Header() {
  return (
    <div className="bg-imagen bg-cover bg-no-repeat bg-center h-80 w-full my-8 mx-auto relative rounded-xl max-sm:bg-cover max-sm:bg-center max-sm:h-44">
      <div className="absolute flex flex-col items-start gap-1 pt-36 px-10 max-sm:pt-20 max-md:pt-20 max-sm:px-5 animate-fadaIn max-sm:gap-0">
        <h2 className="text-white font-bold text-4xl max-sm:text-sm max-sm:font-bold w-80 max-sm:w-44 ">
          Ordena tu comida favorita aquí
        </h2>
        <p className="text-white text-sm max-sm:hidden">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s.
        </p>
        <button className=" bg-white text-xs border-none font-medium px-4 py-2 rounded-2xl mt-1 max-sm:px-2 max-sm:py-2">
          Ver Menú
        </button>
      </div>
    </div>
  );
}

export default Header;
