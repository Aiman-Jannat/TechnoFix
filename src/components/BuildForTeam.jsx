import Button2 from "./Button2";


const BuildForTeam = () => {
    return (
        <div className="w-9/12 mx-auto mt-10">
           <p className="text-5xl font-bold">Built for all kinds of teams</p>
            <div className="flex flex-wrap mt-5 gap-2 justify-start items-center ">
                <p className="px-3 rounded-full border py-2 bg-slate-100">UI & UX design</p>
                <p className="px-3 rounded-full border py-2">Marketing</p>
                <p className="px-3 rounded-full border py-2">Product Management</p>
                <p className="px-3 rounded-full border py-2">Engineering</p>
                <p className="px-3 rounded-full border py-2">Consultants</p>
                <p className="px-3 rounded-full border py-2">Agile Coaches</p>
                <p className="px-3 rounded-full border py-2">Sales</p>
            </div>
            <div className="flex justify-between mt-7 ">
           <div className="font-Inter ">
           <li className="flex items-center py-2">
      <svg className="w-6 h-6 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      <span>Build low-fi wireframes</span>
    </li>
           <li className="flex items-center py-2">
      <svg className="w-6 h-6 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      <span>Involve stakeholders in the <br /> design process</span>
    </li>
           <li className="flex items-center py-2">
      <svg className="w-6 h-6 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      <span>Run engaging design <br /> workshops</span>
    </li>
           <Button2></Button2>
           <div className="mt-5">
            <p>Integrate your favorite tools</p>
            <div className=" mt-1 flex flex-wrap justify-start items-center gap-4">
                <img src="https://i.ibb.co/V903yNk/Vector-1.png" alt="" />
                <img className="w-6 h-6" src="https://i.ibb.co/PFcJ7SP/xd.png" alt="" />
                <img src="https://i.ibb.co/SRP465P/Vector-3.png" alt="" />
                <img src="https://i.ibb.co/59mW8qR/Vector-2.png" alt="" />
            </div>
           </div>
           </div>
           <div>
            <img className="" src="https://i.ibb.co/GCpFfHR/uxdesignwithoutshadow-jpg.png" alt="" />
            </div> 
        </div>
        </div>
    );
};

export default BuildForTeam;