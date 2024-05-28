import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fethOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };
  useEffect(() => {
    if (token) {
      fethOrders();
    }
  }, [token]);

  return (
    <div className=" my-12 mx-0 group">
      <h2>My Orders</h2>
      <div className="flex flex-col gap-5 mt-7 ">
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-6 items-center gap-7 text-xs px-2.5 py-5 text-slate-700 border-solid border border-gray-500 max-sm:grid-cols-3 max-sm:gap-2.5 max-sm:text-xs"
            >
              <img src={assets.parcel_icon} alt="" className=" w-12" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " X " + item.quantity;
                  } else {
                    return item.name + " X " + item.quantity + " , ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items:{" "}{order.items.length} </p>
              <p>
                <span className="text-orange-600">&#x25cf;</span>{" "}
                <b className=" font-medium text-slate-700 ">{order.status}</b>
              </p>
              <button className="border-none px-6 py-0 rounded-md bg-orange-200 cursor-pointer text-slate-800" onClick={fethOrders}>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MyOrders;
