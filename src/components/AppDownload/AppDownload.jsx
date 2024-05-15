import { assets } from "../../assets/assets"


const AppDownload = () => {
  return (
    <div className="mb-16 mt-20 text-5xl text-center font-bold max-sm:text-2xl " id="app-download">
      <p>For Better Experience Download <br/> Tomato App</p>
      <div className=" flex flex-row justify-center gap-8 mt-4 max-sm:grid max-sm:gap-2 ">
        <img src={assets.play_store} alt="" className="cursor-pointer hover:scale-110 max-sm:w-24"/>
        <img src={assets.app_store} alt="" className="cursor-pointer hover:scale-110 max-sm:w-24"/>
      </div>
    </div>
  )
}

export default AppDownload
