import { createContext, useEffect, useState} from "react";
import axios from "axios";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState('');
    const [menu_list,setMenuList] = useState([]);

    const addToCart = (itemId) => {
       if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
       }
       else {
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
       }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
         let totalAmount = 0; 
         for(const item in cartItems)
         {
            if(cartItems[item]>0) {
               let itemInfo = menu_list.find((product)=>product._id === item)
               totalAmount += itemInfo.price * cartItems[item];
            }
         }
         return totalAmount;
    }

    const fetchMenuList = async () => {
       const response = await axios.get(url+"/api/food/list")
       setMenuList(response.data.data)
    }

    useEffect(()=> {
        async function loadData(){
           await fetchMenuList()
           if(localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
         }
        }
        loadData()
    },[])
    

    const contextValue = {
        menu_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

     
     return (
        <StoreContext.Provider value={contextValue} >
           {props.children}
        </StoreContext.Provider>
     )
}

export default StoreContextProvider