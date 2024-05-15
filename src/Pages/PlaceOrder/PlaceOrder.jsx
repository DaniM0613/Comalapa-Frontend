import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"


const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="flex items-start justify-between gap-8 mt-12">
      <div className="w-100">
        <p className=" font-semibold text-xl mb-8 ">Informacion de Envio</p>

        <div className="flex gap-2.5">
          <input type="text" placeholder="First name" className=" mb-4 w-full p-2.5 border-solid border-gray-300 border-2 rounded-md outline-orange-400"/>
          <input type="text" placeholder="Second name" className=" mb-4 w-full p-2.5 border-solid border-gray-300 border-2 rounded-md outline-orange-400"/>
        </div>

        <div className="flex gap-2.5">
          <input type="text" placeholder="Email Address" className=" mb-4 w-full p-2.5 border-solid border-gray-300 border-2 rounded-md outline-orange-400"/>
          <input type="text" placeholder="Address" className=" mb-4 w-full p-2.5 border-solid border-gray-300 border-2 rounded-md outline-orange-400"/>
        </div>

          <input type="text" placeholder="Phone Number" className=" mb-4 w-full p-2.5 border-solid border-gray-300 border-2 rounded-md outline-orange-400"/>
        </div>
        <div className="w-80">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="font-bold ">Total</h2>
          <div>
            <div  className="flex justify-between text-slate-600">
               <p>Subtotal</p>
               <p>Q{getTotalCartAmount()}</p>
             </div>
             <hr className="my-2.5" />
            <div  className="flex justify-between text-slate-600"> 
               <p>Delivery Fee</p>
               <p>Q{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className="my-2.5" />
            <div  className="flex justify-between text-slate-600"> 
               <p>Total</p>
               <b>Q{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button className="border-none text-white bg-orange-500 w-44 py-2 rounded-md cursor-pointer uppercase font-bold text-sm">Proceed to payment</button>
        </div>
          
        </div>
    </form>
  )
}

export default PlaceOrder