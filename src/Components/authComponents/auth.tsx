import { IoLogInSharp, IoLogOutSharp } from "react-icons/io5"
import { RiLogoutCircleFill } from "react-icons/ri"
import { Link} from "react-router-dom"
import { useAuthContext } from "../../context/DataContext";
import { handleLogout } from "../fetchData/Login";

export default function Auth() {
  const { userId} = useAuthContext();

  return (
        <div className="flex flex-row">
            <div className="flex flex-row ">
              <div className="p-2">
              {
                userId && <button onClick={handleLogout} className="text-gray-600 shadow-inner rounded-xl cursor-pointer bg-gray-200 hover:bg-gray-300 px-6 py-2" ><span className=" text-2xl inline-block "><RiLogoutCircleFill className="inline-block" size={20}/></span>  Deconnexion  </button>                      
              }
              </div>
              {
                !userId && <div className="flex flex-row h-11">
                    <Link className="text-gray-600 rounded-lg flex flex-row  py-2 px-4 bg-slate-200 hover:bg-slate-300 font-bold" to={"/Connexion"}>Connexion <span className="text-gray-500 text-2xl"><IoLogInSharp size={30}/></span> </Link>
                    <Link className="ml-4 rounded-lg flex flex-row  py-2 px-4  bg-slate-200 hover:bg-slate-300 text-gray-600 font-bold" to={"/inscription"}><span className="text-gray-500 text-2xl"><IoLogOutSharp size={30}/></span> Inscription  </Link>     
                </div>
              }             
            </div> 
        </div>
  )
}