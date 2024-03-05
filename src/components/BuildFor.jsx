import { Link } from "react-router-dom";
import Button2 from "./Button2";


const BuildFor = () => {
    return (
        <div className="w-9/12 mx-auto mt-10">
        <p className="text-5xl font-bold">Built for the way you work</p>
         <div className="flex flex-wrap mt-5 gap-2 justify-start items-center">
             <p className="px-3 rounded-full border py-2 bg-slate-100">Brainstorming</p>
             <p className="px-3 rounded-full border py-2">Diagramming</p>
             <p className="px-3 rounded-full border py-2">Meeting & workshop</p>
             <p className="px-3 rounded-full border py-2">Scrum Events</p>
             <p className="px-3 rounded-full border py-2">Mapping</p>
             <p className="px-3 rounded-full border py-2">Research & Design</p>
             <p className="px-3 rounded-full border py-2">Strategic planning</p>
         </div>
         <div className="flex flex-wrap justify-between mt-7 ">
        <div className="font-Inter ">
          <p className="font-bold text-xl">Brainstorming</p>
          <p className="text-slate-500 py-3">Unleash creative ideas and build on <br /> them with the help of sticky notes, <br /> images, mind maps, videos, drawing <br /> capabilities — the list goes on.</p>
         <Button2 className="mt-10"></Button2>
        
        </div>
        <div>
         <img className="" src="https://i.ibb.co/MspPBJ1/Brainstormwithoutshadow-jpg.png" alt="" />
         </div> 
     </div>
     </div>
    );
};

export default BuildFor;