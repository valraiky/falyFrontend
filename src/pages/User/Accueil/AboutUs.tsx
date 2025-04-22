import { Link } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function AboutUs() {
  return (
    <>
    <div className="flex w-full max-[780px]:flex-col">
        <div className="w-1/3 max-[780px]:w-full h-[700px] max-[780px]:h-[300px] bg-[url(/images/aboutUs.png)] bg-contain bg-no-repeat bg-blue-300 bg-center">

        </div>

        <div className="w-2/3 max-[780px]:w-full h-[700px] px-16 max-[780px]:px-0 relative">
           <h2 className="text-2xl font-light ">A propos de nous</h2>

           <h2 className="text-4xl max-[1310px]:text-3xl font-semibold mt-8 max-[1000px]:mt-1 max-[1000px]:text-2xl">comment nous pouvons vous aider</h2>
 
           <p className="text-xl max-[1310px]:text-[14px] text-gray-800">Notre plateforme d'apprentissage en ligne est un centre d'éducation en ligne dynamique et innovant conçu pour répondre aux besoins des étudiants, des enseignants et des apprenants tout au long de la vie. Nous pensons que l'apprentissage doit être accessible à tous</p>

           <div className="flex flex-col justify-between h-32 text-xl max-[1310px]:text-[14px] mt-8 ">
            
             <Link to="" className="block "><span className="inline-block text-nowrap"><IoMdCheckmarkCircleOutline /></span> <span className="inline-block">expériences d'apprentissage personnalisées</span> </Link>

             <Link to="" className="block "><span className="inline-block text-nowrap"><IoMdCheckmarkCircleOutline /></span> <span className="inline-block">Accessible à un large éventail de ressources</span> </Link>

             <Link to="" className="block "><span className="inline-block text-nowrap"><IoMdCheckmarkCircleOutline /></span> <span className="inline-block">La flexibilité et la commodité</span> </Link>

             <Link to="" className="block "><span className="inline-block text-nowrap"><IoMdCheckmarkCircleOutline /></span> <span className="inline-block">expériences d'apprentissage personnalisées</span> </Link>

             <Link to="" className="block "><span className="inline-block text-nowrap"><IoMdCheckmarkCircleOutline /></span> <span className="inline-block">Accessible à un large éventail de ressources</span> </Link>

             <Link to="" className="block "><span className="inline-block text-nowrap"><IoMdCheckmarkCircleOutline /></span> <span className="inline-block">La flexibilité et la commodité</span> </Link>
              
             <Link to="" className="block "><span className="inline-block text-nowrap"><IoMdCheckmarkCircleOutline /></span> <span className="inline-block">expériences d'apprentissage personnalisées</span> </Link>

              <Link to="" className="block "><span className="inline-block text-nowrap"><IoMdCheckmarkCircleOutline /></span> <span className="inline-block">Accessible à un large éventail de ressources</span> </Link>

              <Link to="" className="block "><span className="inline-block text-nowrap"><IoMdCheckmarkCircleOutline /></span> <span className="inline-block">La flexibilité et la commodité</span> </Link>
           
              <Link to="" className="block "><span className="inline-block text-nowrap"><IoMdCheckmarkCircleOutline /></span> <span className="inline-block">expériences d'apprentissage personnalisées</span> </Link>

             <Link to="" className="block "><span className="inline-block text-nowrap"><IoMdCheckmarkCircleOutline /></span> <span className="inline-block">Accessible à un large éventail de ressources</span> </Link>

             <Link to="" className="block "><span className="inline-block text-nowrap"><IoMdCheckmarkCircleOutline /></span> <span className="inline-block">La flexibilité et la commodité</span> </Link>
           
           </div>

           <Link to="" className="bg-blue-500 py-2 px-4 absolute bottom-4 left-16 ">Explorer le cours</Link>
        </div>
    </div>
    </>
  )
}
