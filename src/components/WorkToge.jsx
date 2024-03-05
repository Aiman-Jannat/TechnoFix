import Button2 from "./Button2";


const WorkToge = () => {
    return (
        <div className="flex flex-wrap w-9/12 justify-between mx-auto mt-10 items-center ">
           <div className="font-Inter ">
             <p className="font-extrabold drop-shadow-xl text-5xl">Work together,<br /> wherever you work</p>
             <p className="text-slate-500 py-3">In the office, remote, or a mix of the two, with Miro,<br /> your team can connect, collaborate, and co-create in <br />
              one space no matter where you are.</p>
            <Button2 className="mt-10"></Button2>
           
           </div>
           <div>
            <img className="h-96" src="https://i.ibb.co/TT7vdHM/hybridwork-png.png" alt="" />
            </div> 
        </div>
    );
};

export default WorkToge;