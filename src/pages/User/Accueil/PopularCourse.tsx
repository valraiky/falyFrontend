import { IoMdStar } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PopularCourse() {
  return (
    <div className=" pb-20">
      <h1 className="text-center mt-28 text-2xl font-light">Cours populaire</h1>

      <h2 className="text-3xl text-center mt-20 font-semibold">Trouvez votre parfait programme</h2>

      <div className="w-full h-14 mt-8 mb-14 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 2xl:grid-cols-12 gap-4 overflow-hidden">
        <Link to="" className="bg-blue-500 py-2 px-4 text-white" > php</Link>
        <Link to="" className="bg-blue-500 py-2 px-4 text-white"> python</Link>
        <Link to="" className="bg-blue-500 py-2 px-4 text-white"> Javascript</Link>
        <Link to="" className="bg-blue-500 py-2 px-4 text-white">php cms</Link>
        <Link to="" className="bg-blue-500 py-2 px-4 text-white"> php framwork</Link>
        <Link to="" className="bg-blue-500 py-2 px-4 text-white"> Javascript framork</Link>
        <Link to="" className="bg-blue-500 py-2 px-4 text-white">php cms</Link>
        <Link to="" className="bg-blue-500 py-2 px-4 text-white"> php framwork</Link>
        <Link to="" className="bg-blue-500 py-2 px-4 text-white"> Javascript framork</Link>
        <Link to="" className="bg-blue-500 py-2 px-4 text-white">php cms</Link>
        <Link to="" className="bg-blue-500 py-2 px-4 text-white"> php framwork</Link>
        <Link to="" className="bg-blue-500 py-2 px-4 text-white"> Javascript framork</Link>
      </div>

      <div className="w-full flex flex-row flex-nowrap overflow-hidden ">
        <div className="w-80 h-[480px] border border-gray-400 bg-gray-300 ">
         <div className="h-64 w-full border">
            <img className="w-full h-full" src="/images/php.png" alt="" />
         </div>

         <div className="p-2">
            <h2 className="font-semibold text-xl">Apprendre php 7 et avec programation orient object</h2>

            <div className="w-full flex mt-4 mb-4">
              <div className="flex h-8">
              <IoMdStar className="text-yellow-700 text-2xl" />
              <IoMdStar className="text-yellow-700 text-2xl" />
              <IoMdStar className="text-yellow-700 text-2xl" />
              <IoMdStar className="text-yellow-700 text-2xl" />
              <IoMdStar className="text-yellow-700 text-2xl" />
              <IoMdStar className="text-yellow-700 text-2xl" />
              <IoMdStar className="text-gray-500 text-2xl" />
              </div>

              <p><span className="inline-block font-semibold text-gray-600">4.9</span> <span className="inline-block text-gray-600">(2024)</span></p> <br />
            </div>

            <div className="w-full mb-6">
              <span className="inline-block"><FiUsers className="" /></span> <span className="inline-block text-gray-600">4.912s</span>
              <span className="inline-block ml-8"><FaBook /></span> <span className="inline-block text-gray-600">37 Lessonss</span>
            </div>

            <Link to="" className="bg-blue-500 py-2 px-6" >$50</Link>
         </div>
        </div>
      </div>
    </div>
  )
}
