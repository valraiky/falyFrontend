import { IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router-dom";
import { LuUserRoundCheck } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import PopularCourse from "./PopularCourse";
import AboutUs from "./AboutUs";

export default function Home() {
  
  return (
    <>
    <div className="bg-gray-50 border">
      

      <div  className={`my-bg-position relative pt-10 h-screen bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url(/images/background.png)] bg-contain bg-no-repeat`} >
          <div className="w-[90%] mx-auto h-[350px] flex flex-row justify-between items-end mt-20 max-[780px]:h-[200px] ">
            <div className="h-full w-[40%] max-[780px]:w-full ">
              <p className="text-5xl max-[1250px]:text-2xl  max-[1550px]:text-3xl leading-snug font-semibold ">FALINIRINA JOHN , diplomé, certifié, expert en prestashop</p>
              <p className="text-gray-700 text-2xl max-[1550px]:text-xl max-[1250px]:text-lg">
                Vennez apprendre à coder avec moi, du zero, de niveau intermediaire vers prestataire proffessionelle
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quisquam voluptatibus ea dolorem incidunt pariatur culpa similique expedita in accusamus modi, suscipit eaque
              </p>
            </div>

            <IoIosStarHalf className="text-8xl text-white bg-blue-400 max-[780px]:hidden" />
          </div>

          <div className="w-[90%] mx-auto h-32 flex mt-32 ">
            <div className="flex items-center w-[400px] ">
              <Link className="bg-blue-400 px-4 py-3"  to="">Explorer les cours </Link> 
            </div>
            
            <div className="bg-white h-32 p-4 w-[350px] flex items-center">
              <LuUserRoundCheck className="bg-yellow-500 text-8xl text-white" />
              <div className="pl-4">
                <p className="font-bold text-3xl">93%</p>
                <p className="text-gray-700 text-2xl">de réussite</p>
              </div>
            </div>
          </div>

          <div className="w-full">
          <div className="w-[90%] mx-auto my-16 flex flex-row flex-wrap justify-between max-[700px]:justify-center">

            <div className="w-80 bg-white h-60 border-t-4 border-yellow-500 p-4 shadow shadow-gray-700 mb-10">
              <h2 className="text-2xl font-semibold">24/7 Aide</h2>
              <p className="mt-4 mb-4">Notre vaste réseau de mentors peut vous aider à vous motiver et à vous guider à tout moment, peu importe où vous en êtes dans votre parcours.</p>
              <Link to="" className="text-blue-500 text-xl" >plus à ce sujet <span className="inline-block"><MdArrowOutward /></span></Link>

            </div>
            
            <div className="w-80 bg-white h-60 border-t-4 border-yellow-500 p-4 shadow shadow-gray-700 mb-10">
              <h2 className="text-2xl font-semibold">Temps de réponse moyen d'une heure</h2>
              <p className="mt-4 mb-4">obtenez des réponses à toutes vos questions rapidement et sans entrave dans un délai d'une heure ou moins</p>
              <Link to="" className="text-blue-500 text-xl" >plus à ce sujet <span className="inline-block"><MdArrowOutward /></span></Link>

            </div>

            <div className="w-80 bg-white h-60 border-t-4 border-yellow-500 p-4 shadow shadow-gray-700 mb-10">
              <h2 className="text-2xl font-semibold">Hautement vérifié</h2>
              <p className="mt-4 mb-4">Nos mentors suivent eux-mêmes un processus de recrutement en 5 étapes et suivent généralement un programme Nanodegree</p>
              <Link to="" className="text-blue-500 text-xl" >plus à ce sujet <span className="inline-block"><MdArrowOutward /></span></Link>

            </div>

            <div className="w-80 bg-white h-60 border-t-4 border-yellow-500 p-4 shadow shadow-gray-700 mb-10">
              <h2 className="text-2xl font-semibold">Temps de réponse moyen d'une heure</h2>
              <p className="mt-4 mb-4">obtenez des réponses à toutes vos questions rapidement et sans entrave dans un délai d'une heure ou moins</p>
              <Link to="" className="text-blue-500 text-xl" >plus à ce sujet <span className="inline-block"><MdArrowOutward /></span></Link>

            </div>
          </div>
          </div>

          <div>
          </div>
      </div>
    </div>

    <div className="w-full  max-[1440px]:mt-96 max-[700px]:mt-[800px] ">
      <div className="w-[90%] mx-auto ">
       <PopularCourse />  
      </div>
    </div>

    <div className="w-full bg-gray-300 py-20">
      <div className="w-[90%] mx-auto ">
       <AboutUs />  
      </div>
    </div>
    </>
  )
}  