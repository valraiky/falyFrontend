import { SiSololearn } from "react-icons/si";
import Menu from "../menu/Menu";
import { useState } from "react";
import Auth from "../authComponents/auth";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";



export default function HeaderClient() {
  const [token,setToken] = useState("")
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="w-full m-0">
        <div className="w-full bg-black h-10 flex items-center justify-center text-center text-slate-100">
            <p>Obtenir cours à partir de 50000Ariary | Et il y a toujours speciale course pour nouveaux étudiants</p>
        </div>

        <div className="h-16 border-b-[1px] border-gray-300 flex items-center justify-between pr-4 relative">
          <div className="flex">
            <div className="h-16 w-72 max-[1100px]:w-32  flex justify-center items-center">
              <SiSololearn className="text-5xl text-indigo-900" />
            </div>
            <div className="flex items-center max-[870px]:hidden ">
              <Menu />
            </div>
         </div>

         <div>
            <Auth token={token!} setToken={setToken} />
         </div>

          {
            isShow ?  <IoIosClose onClick={()=>setIsShow(false)} className="hidden absolute max-[870px]:block top-2 text-3xl font-bold left-2  shadow shadow-slate-800 text-slate-400 cursor-pointer z-30"  /> : 
            <CiMenuBurger onClick={()=>setIsShow(true)}  className="hidden absolute max-[870px]:block top-2 text-3xl font-bold left-2  shadow shadow-slate-800 text-slate-400 z-30 cursor-pointer" />
          }
         {
          isShow &&
          <div className="hidden absolute max-[1300px]:block top-2 left-2 shadow shadow-slate-800 pb-4 w-60 z-20 bg-white">
           <Menu />
         </div>
         }
         
        </div>
    </div>
  )
}
