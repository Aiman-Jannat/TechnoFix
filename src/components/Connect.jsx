import React from 'react';
import Button2 from './Button2';

const Connect = () => {
    return (
        <div className="flex flex-wrap w-9/12 justify-between mx-auto mt-10 items-center ">
        <div>
         <img className="h-96" src="https://i.ibb.co/2gdKLFT/M3-integrations-all-integrations-png.png" alt="" />
         </div> 
        <div className="font-Inter ">
          <p className="font-extrabold drop-shadow-xl text-5xl">Connect <br />
your tools, <br />
close your tabs</p>
          <p className="text-slate-500 py-3">Whether you want to edit your Google Docs, <br />resolve Jira issues, or collaborate over Zoom, Miro has 100+ <br /> integrations with tools you already use and love.</p>
         <Button2 className="mt-10"></Button2>
        
        </div>
        
     </div>
    );
};

export default Connect;