import React from 'react';
import Navbar from './Navbar';
import TakeIdeas from './TakeIdeas';
import Logos from './Logos';
import Collaborate from './Collaborate';
import WorkToge from './WorkToge';
import Connect from './Connect';
import TheWays from './TheWays';
import BuildFor from './BuildFor';
import BuildForTeam from './BuildForTeam';
import Loved from './Loved';
import Footer from './Footer';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <hr className="mt-3" />
            <TakeIdeas></TakeIdeas>
            <p className="text-slate-600 text-sm mt-10 text-center ">Trusted by 45M+ users</p>
            <Logos></Logos>
            <Collaborate></Collaborate>
            <WorkToge></WorkToge>
           <Connect></Connect>
           <TheWays></TheWays>
           <BuildFor></BuildFor>
           <BuildForTeam></BuildForTeam>
           <Loved></Loved>
           <Footer></Footer>
        </div>
    );
};

export default Main;