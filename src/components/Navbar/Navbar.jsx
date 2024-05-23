import { useContext, useState } from "react"
import { assets } from "../../assets/assets"
import { Link, useNavigate } from "react-router-dom"
import { StoreContext } from "../../context/StoreContext"


const Navbar = ({setShowLogin}) => {

    const [ menu, setMenu ] = useState("inicio")

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () =>{
       localStorage.removeItem("token");
       setToken("");
       navigate("/")
    }

  return (
    <div className="flex px-0 py-0 justify-between items-center">
        <Link to='/'> <img src={assets.logo} alt="" className="w-32 max-sm:w-16"/> </Link>
        <ul className="flex gap-5 list-none text-slate-600 text-sm max-sm:justify-between max-sm:gap-2 max-sm:hidden">
            <Link to='/' onClick={() => setMenu("inicio")} className={menu==="inicio" ? "pb-px border-solid border-b-2 border-slate-600 cursor-pointer" : "cursor-pointer"}>Inicio</Link>
            <a href='#explore-restaurant'onClick={() => setMenu("menu")} className={menu==="menu" ? "pb-px border-solid border-b-2 border-slate-600 cursor-pointer" : "cursor-pointer"}> Menú</a>
            <a href='#footer'onClick={() => setMenu("contact-us")} className={menu==="contact-us" ? "pb-px border-solid border-b-2 border-slate-600 cursor-pointer" : "cursor-pointer"}> Contact Us</a>

        </ul>
        <div className="flex items-center gap-10 max-sm:gap-3">
            <img src={assets.search_icon} alt="" className="w-6 max-sm:w-4"/>
            <div className="relative">
               <Link  to='/cart'> <img src={assets.basket_icon} alt="" className="w-6 max-sm:w-4"/> </Link> 
                <div className={getTotalCartAmount()===0?"":"absolute min-w-3 min-h-3 bg-orange-400 rounded-3xl bottom-6 left-4 max-sm:min-h-2 max-sm:min-w-2 max-sm:bottom-3"}></div>
            </div>
            {!token ?  
            <button onClick={()=>setShowLogin(true)} className=" bg-transparent text-sm text-slate-600 border-2 border-orange-600 py-2 px-2  rounded-3xl cursor-pointer transition-transform hover:bg-red-50 max-sm:text-xs max-sm:w-20 max-sm:py-1 max-sm:px-2">Inicia Sesión</button>
            : <div className="">
              <img src={assets.profile_icon} alt=""/>
              <ul className="">
                 <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt=""/><p>Orders</p> </li>
                 <hr/>
                 <li onClick={logout} ><img src={assets.logout_icon} alt="" /><p>Logout</p> </li>
                 
              </ul>
            </div>
          }
           
        </div>
      </div>
    
  );
};

export default Navbar;
