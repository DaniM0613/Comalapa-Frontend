import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const MenuItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="w-full m-auto rounded-xl shadow-2xl animate-fadaIn">
      <div className="relative ">
        <img src={url+"/images/"+image} alt="" className=" rounded-t-2xl" />
        {!cartItems[id] ? (
          <img
            className="w-7 absolute bottom-4 right-4 cu rounded-xl"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 p-1.5 rounded-full bg-white">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-7"
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-7"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-2">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs font-bold">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-16" />
        </div>
        <p className="text-slate-600 text-xs">{description}</p>
        <p className="text-orange-500 font-bold m-1">Q{price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
