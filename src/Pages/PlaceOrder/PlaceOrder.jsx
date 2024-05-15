import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"


const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="">
      <div className="">
        <p className="">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder="First name"/>
          <input type="text" placeholder="Second name"/>
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Email Address"/>
          <input type="text" placeholder="Address"/>
        </div>

          <input type="text" placeholder="Phone Number"/>
        </div>
       <div className="">
       <div className="">
          <h2>Cart Totals</h2>
          <div>
            <div className="">
               <p>Subtotal</p>
               <p>Q{getTotalCartAmount()}</p>
             </div>
             <hr/>
            <div className=""> 
               <p>Delivery Fee</p>
               <p>Q{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className=""> 
               <p>Total</p>
               <b>Q{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>Proceed to payment</button>
        </div>
          
        </div>
    </form>
  )
}

export default PlaceOrder