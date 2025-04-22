import { Link, useLocation } from "react-router-dom"
import { MenuData } from "./Link/Data"

export default function Menu() {
    const {pathname} = useLocation();

    console.log(MenuData, "pathName:", pathname);
    
  return (
    <div>
        <ul className="flex flex-row max-[870px]:flex-col w-[600px] max-[1300px]:w-60 max-[1300px]:items-center justify-between">
                {
                    MenuData.map((items, indexLink) => { 
                        
                        return(
                            <li className="borderAnimateLi max-[870px]:shadow max-[870px]:mt-4 max-[870px]:rounded-lg max-[870px]:shadow-slate-700 max-[1300px]:w-[90%] max-[870px]:bg-slate-400 max-[1300px]:text-center" key={indexLink}>
                                <Link className={`m-2 ${pathname === items.path ?  "text-red-700" : "text-black" }`} to={items.path}> {items.label} </Link> 
                            </li>
                        )  
                    })
                }
        </ul>
    </div>
  )
}
