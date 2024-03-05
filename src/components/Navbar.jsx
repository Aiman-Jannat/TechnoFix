
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import Button from "./Button";
const Navbar = () => {
    return (
        <div className="flex flex-wrap justify-between px-4 mt-5  items-center">
         <div className="flex flex-wrap gap-3 items-center">
                <img className="h-6 " src="https://i.ibb.co/j5bCscS/svg.png" alt="" />
                <div className="flex gap-3">
                <p className="flex gap-2 items-center">Product <RiArrowDropDownLine></RiArrowDropDownLine></p>
                <p className="flex gap-2 items-center">Solutions <RiArrowDropDownLine></RiArrowDropDownLine></p>
                <p className="flex gap-2 items-center">Resources <RiArrowDropDownLine></RiArrowDropDownLine></p>
                <p>Enterprize </p>
                <p>Pricing </p>
                </div>
                
            </div>
         <div className="flex flex-wrap items-center gap-3">
                <p className="flex gap-2 items-center"><CiGlobe></CiGlobe> EN</p>
                <p>Contact Sales</p>
                <p>Login</p>
                <Button text={"Sign up free"}></Button>
            </div>
            
        </div>
    );
};

export default Navbar;