import { restaurant_list } from "../../assets/assets";

const ExploreRestaurant = ({ category, setCategory }) => {
  return (
    <div className=" flex flex-col gap-2" id="explore-restaurant">
      <h1 className="text-black font-bold max-sm:text-md ">
        Explore our Restaurants
      </h1>
      <p className="w-90 text-slate-600 max-sm:text-xs">
        Choose from a diverse menu featuring a delectable array of dishes
      </p>
      <div className="flex justify-between items-center gap-2 text-center m-2 overflow-x-scroll">
        {restaurant_list.map((item, index) => {
          return (
            <div
              className=" cursor-pointer rounded-lg max-sm:px-1"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.restaurant_name ? "All" : item.restaurant_name
                )
              }
              key={index}
            >
              <img
                className={
                  category == item.restaurant_name
                    ? " border-4 border-orange-500 rounded-full "
                    : "rounded-full"
                }
                src={item.restaurant_image}
                alt=""
                height={192}
                width={192}
              />
              <p className="text-sm mt-2 text-slate-600 cursor-pointer max-sm:text-xs">
                {item.restaurant_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2 h-0 bg-slate-200 max-sm:my-1" />
    </div>
  );
};

export default ExploreRestaurant;
