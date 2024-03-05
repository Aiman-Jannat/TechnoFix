import { FaArrowRightLong } from "react-icons/fa6";


const Loved = () => {
    return (
        <div className="mt-10 w-9/12 mx-auto">
            <p className="text-center text-5xl font-bold">Loved by the world's best teams</p>
          <div>
          <div className="flex justify-center">
            <button className="flex gap-2 items-center border border-blue-700  text-blue-700 px-2 md:px-7 py-1 rounded-full mt-5 "><span>See all customer's<span className="pe-2"> stories</span> </span><FaArrowRightLong></FaArrowRightLong></button>
        </div>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex-col flex-grow-0">
                <div >
                  <img className="h-28" src="data:image/png;base64,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" alt="" />
                   <p className="mt-2">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
                </div>
                <div className="mt-4 flex gap-3 justify-start items-center">
                    <img src="https://i.ibb.co/vxYn8kw/Mask-group-1-png.png" alt="" />
                    <div>
                        <p className="text-xs">Roxanne Mustafa</p>
                        <p className="text-xs">Design Team Lead at VMware</p>
                    </div>
                </div>
            </div>

            <div className=" mt-12 flex-col">
                <div >
                  <img className="h-7" src="https://i.ibb.co/xScnnK8/Vector-4.png" alt="" />
                   <p className="mt-10">“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>
                </div>
                <div className="flex gap-3 justify-start items-center mt-16">
                    <img src="https://i.ibb.co/ZLK8RDk/Jane-Docusign-Testimonials-2x-png-1.png" alt="" />
                    <div>
                        <p className="text-xs">Jane Ashley</p>
                        <p className="text-xs">Head of Design at DocuSign</p>
                    </div>
                </div>
            </div>

            <div className=" mt-12 flex-col">
                <div >
                  <img className="h-10" src="https://i.ibb.co/Yt3PbDb/Vector-5.png" alt="" />
                   <p className="mt-7">“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
                </div>
                <div className="flex gap-3 justify-start items-center mt-16">
                    <img src="https://i.ibb.co/HGrJqFz/Mask-group-png.png" alt="" />
                    <div>
                        <p className="text-xs">Laura Baird</p>
                        <p className="text-xs">Associate Design Director at frog</p>
                    </div>
                </div>
            </div>
          
          
           </div>
        </div>
    );
};

export default Loved;