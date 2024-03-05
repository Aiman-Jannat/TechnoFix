import Button from "./Button";


const TakeIdeas = () => {
    return (
        <div className="flex flex-wrap w-9/12 justify-between mx-auto mt-10 ">
           <div className="font-Inter ">
             <p className="font-extrabold drop-shadow-xl text-5xl">Take ideas from <br /> better to best</p>
             <p className="text-slate-500 py-3">Miro is your team's visual platform to connect,<br /> collaborate, and create — together.</p>
              <div className="w-full justify-start gap-3">
                <button className="w-full mb-3 text-start text-slate-400 rounded-full px-2 md:px-5 py-2 border border-slate-500">Enter your work email</button>
                <Button className="w-full" text={"Sign up free"}></Button>
              </div>
              <p className="text-slate-500 py-3">Collaborate with your team within minutes</p>
            <div className="flex flex-grow">
            <div className="flex gap-3 justify-around items-center bg-slate-100 rounded-lg px-4">
                
                <div className="flex-col items-start justify-start p-2 bg-slate-5 rounded-md">
                <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
<p className="text-black text-xs">Based on 5149+ reviews:</p>
                </div>
                
                
                
                
                <div className="flex gap-3 h-8">
                    <img src="https://i.ibb.co/Fz8dj8H/svg-1.png" alt="" />
                    <img src="https://i.ibb.co/J7qqc9V/svg-2.png" alt="" />
                </div>
                
                
                
                
                <div className="h-8">
                    <img src="https://i.ibb.co/8d2PSKc/svg-3.png" alt="" />
                </div>
            </div>
            </div>
           
           </div>
           <div>
            <img className="h-96" src="https://i.ibb.co/09bdbxB/headerimage-without-text-png.png" alt="" />
            </div> 
        </div>
    );
};

export default TakeIdeas;