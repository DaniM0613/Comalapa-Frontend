import { useContext, useState} from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Inicia Sesión");
  const [data,setData] = useState({
      name: '',
      email:'',
      password: ''
  })

  const {url, setToken} = useContext(StoreContext)

  const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (event) =>{
      event.preventDefault()
      let newUrl = url;
      if (currState==='Login') {
         newUrl += "/api/user/login"
      }
      else {
         newUrl += "/api/user/register"
      }
      
      const response = await axios.post(newUrl,data);

      if(response.data.success){
         setToken(response.data.token);
         localStorage.setItem('token',response.data.token);
         setShowLogin(false)
      }
      else {
        alert(response.data.message)
      }
}

  return (
    <div className="absolute z-10 w-full h-full backdrop-blur-sm bg-black/50 grid">
      <form onSubmit={onLogin} className="place-self-center w-[max(23vw,330px)] text-gray-600 bg-white flex flex-col gap-5 p-6 rounded-xl text-xl font-semibold animate-fadaIn">
        <div className="flex justify-between items-center text-black">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="cursor-pointer w-4"
          />
        </div>
        <div className="flex flex-col gap-3">
          {currState === "Login" ? (
            <></>
          ) : (
            <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Nombre" required className="outline-none border-solid border border-gray-400 px-2 py-1 rounded-xl" />
          )}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Correo Electronico" required className="outline-none border border-gray-400 px-2 py-1 rounded-xl"/>
          <input name='password'  onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required className="outline-none border-solid border border-gray-400 px-2 py-1 rounded-xl" />
        </div>
        <button type='submit' className="border-none p-2 rounded-xl text-white bg-orange-500 cursor-pointer text-sm">{currState === "Sing Up" ? "Create account" : "Login"}</button>
        <div className="flex items-start gap-2 mb-0">
          <input type="checkbox" required className="mt-1" />
          <p className="text-sm">
            Al continuar aceptas los términos de uso y política de privacidad
          </p>
        </div>
        {currState === "Login" ? (
          <p className="text-sm">
            ¿Crear una nueva cuenta?{" "}
            <span className="text-orange-500 font-bold cursor-pointer" onClick={() => setCurrState("Sing Up")}>Haga Clic Aquí</span>{" "}
          </p>
        ) : (
          <p className="text-sm"> 
            ¿Ya tienes una cuenta?{" "}
            <span className="text-orange-500 font-bold cursor-pointer" onClick={() => setCurrState("Login")}>Inicia Sesión</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
