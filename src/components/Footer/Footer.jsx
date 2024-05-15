import { assets } from "../../assets/assets"


const Footer = () => {
  return (
    <div className=' text-slate-200 bg-slate-800 flex flex-col items-center gap-5 px-8 pt-20 max-sm:pt-10 max-sm:px-4 max-sm:gap-0' id="footer">
      <div className="w-full grid grid-cols-3 gap-20 max-sm:gap-2 ">
        <div className="flex flex-col items-start gap-2">
           <img src={assets.logo} alt=""/>
           <p className="max-sm:text-xs">Te gustaria agregar tu restaurante, contactanos</p>
           <div className="flex flex-row gap-2">
             <img src={assets.facebook_icon} alt="" className="max-sm:hidden"/>
             <img src={assets.twitter_icon} alt="" className="max-sm:hidden"/>
             <img src={assets.linkedin_icon} alt="" className="max-sm:hidden"/>
           </div>
        </div>
        <div className="flex flex-col items-start gap-2 max-sm:gap-1 ">
          <h2 className="text-white font-bold text-2xl uppercase max-sm:text-sm ">Compañia</h2>
          <ul>
            <li className="list-none mb-2.5 cursor-pointer max-sm:text-xs">Home</li>
            <li className="list-none mb-2.5 cursor-pointer max-sm:text-xs">About</li>
            <li className="list-none mb-2.5 cursor-pointer max-sm:text-xs">Delivery</li>
            <li className="list-none mb-2.5 cursor-pointer max-sm:text-xs">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-2">
           <h2 className="text-white font-bold text-2xl uppercase  max-sm:text-sm">Contactanos</h2>
           <ul>
             <li className="list-none mb-2.5 max-sm:text-xs">1-212-456-7980</li>
             <li className="list-none mb-2.5 max-sm:text-xs">contact@tomato.com</li>
           </ul>
        </div>
      </div>
      <hr className="w-full h-1 my-5 bg-green-200 border-none"/>
       <p className="pb-4 max-sm:text-xs max-sm:pb-2"> Copyright 2024 Tomato.com - All Right Resersved.</p>
    </div>
  )
}

export default Footer
