import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import MenuItem from "../MenuItem/MenuItem";

const MenuDisplay = ({ category }) => {
  const { menu_list } = useContext(StoreContext);

  return (
    <div className="mt-2 pb-4" id="menu-list">
      <h1 className="font-bold max-sm:text-md"> Top dishes</h1>
      <div className=" mt-2 grid grid-cols-4 gap-2 max-sm:grid-cols-2">
        {menu_list.map((item, index) => {
          if(category==='All' || category===item.category) {
            return (
              <MenuItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          
        })}
      </div>
    </div>
  );
};
export default MenuDisplay;
