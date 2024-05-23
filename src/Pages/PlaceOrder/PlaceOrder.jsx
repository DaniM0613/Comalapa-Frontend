import { useContext, useEffect, useState } from "react"
import { StoreContext } from "../../context/StoreContext"
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const PlaceOrder = () => {

  const {getTotalCartAmount,token,menu_list,cartItems,url} = useContext(StoreContext)

  const [data,setData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      street:"",
      phone:""
  })

  const onChangeHandler = (event) => {
     const name = event.target.name;
     const value = event.target.value;
     setData(data=>({...data,[name]:value}))
}

  const placeOrder = async (event) => {
     event.preventDefault();
     let orderItems = [];
     menu_list.map((item) => {
        if(cartItems[item._id]>0){
           let itemInfo = item;
           itemInfo["quantity"] = cartItems[item._id]
           orderItems.push(itemInfo)
        }
     })
     let orderData = {
       address:data,
       items:orderItems,
       amount:getTotalCartAmount()+2,
     }
     let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
     if (response.data.success) {
        const {session_url} = response.data;
        window.location.replace(session_url);
     }
     else {
       alert("Error");
     }
  }

  const navigate = useNavigate();

  useEffect(()=>{
     if(!token){
       navigate('/cart')
     }
     else if(getTotalCartAmount()===0)
      {
        navigate('/cart')
      }
  },[token])

  return (
    <form onSubmit={placeOrder} className="flex items-start justify-between gap-8 mt-12">
      <div className="w-100">
        <p className=" font-semibold text-xl mb-8 ">Informacion de Envio</p>

        <div className="flex gap-2.5">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First name" className=" mb-4 w-full p-2.5 border-solid border-gray-300 border-2 rounded-md outline-orange-400"/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Second name" className=" mb-4 w-full p-2.5 border-solid border-gray-300 border-2 rounded-md outline-orange-400"/>
        </div>

        <div className="flex gap-2.5">
          <input required name="email" onChange={onChangeHandler} value={data.email} type="text" placeholder="Email Address" className=" mb-4 w-full p-2.5 border-solid border-gray-300 border-2 rounded-md outline-orange-400"/>
          <input required name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Address" className=" mb-4 w-full p-2.5 border-solid border-gray-300 border-2 rounded-md outline-orange-400"/>
        </div>

          <input required name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone Number" className=" mb-4 w-full p-2.5 border-solid border-gray-300 border-2 rounded-md outline-orange-400"/>
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
          <button type="submit" className="border-none text-white bg-orange-500 w-44 py-2 rounded-md cursor-pointer uppercase font-bold text-sm">Proceed to payment</button>
        </div>
          
        </div>
    </form>
  )
}

export default PlaceOrder