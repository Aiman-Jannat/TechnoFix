import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { IoRemoveOutline } from "react-icons/io5";
const Footer = () => {
    const mergedDivStyle = {
        backgroundColor: '#FFA500',
        backgroundImage: `url('https://i.ibb.co/sqkGLqk/Path-10741.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        color: 'rgba(0, 0, 0, 0.8)', // Adjust the color of the letter C
        fontSize: '48px', // Adjust the font size of the letter C
        lineHeight: '200px', // Adjust the line height to vertically center the text
      };
    return (
        <div className="bg-blue-900 mt-10 text-white relative" >
            <div className="w-9/12 py-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                    <p className="text-white font-bold text-xl">Scan. Detect. Remove.</p>
                    <div className="flex flex-wrap gap-4 mt-5">
                        < FaSquareTwitter className="text-white bg-blue-900"></FaSquareTwitter>
                        <FaFacebookSquare className="text-white bg-blue-900"></FaFacebookSquare>
                        <FaSquareYoutube className="text-white bg-blue-900"></FaSquareYoutube>
                    </div>
                    <div className="flex flex-wrap gap-6 text-white text-sm mt-5">
                        <u>Privacy policy</u>
                        <u>Terms of services</u>
                    </div>
                    <p className="text-sm mt-5">Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                    <p className="text-sm mt-5">Designed & developed by Bigger Picture</p>
                    
                </div>
                
                <div>
                    <p className="text-3xl font-bold">Miro</p>
                    <hr className="px-3 mt-5 w-1/2" />
                    <div className="mt-5">
                        <p className="text-md text-yellow-300 font-bold flex gap-4 items-center "><IoRemoveOutline></IoRemoveOutline> iPhone</p>
                        <p className="text-md text-yellow-400 font-bold flex gap-4 items-center mt-3 "><IoRemoveOutline></IoRemoveOutline> Android</p>
                        <p className="text-md text-yellow-400 font-bold flex gap-4 items-center mt-3"><IoRemoveOutline></IoRemoveOutline> Help</p>
                        <p className="text-md text-yellow-400 font-bold flex gap-4 items-center mt-3"><IoRemoveOutline></IoRemoveOutline> About</p>
                        <p className="text-md text-yellow-400 font-bold flex gap-4 items-center mt-3"><IoRemoveOutline></IoRemoveOutline> Insights</p>
   
                    </div>
                
                
                
                </div>
               
                <div style={mergedDivStyle} className="bg-amber-900 p-5 rounded-3xl  h-fit">
                    <p className="text-blue-900 text-xl font-bold">Sign up to our newsletter</p>
                    <p className="text-black text-sm mt-3">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                    <form className="max-w-lg rounded-s-lg  mx-auto">
    <div className="flex">
    
       
        
        <div className="relative w-full mt-4">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-xl border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 rounded-s-xl" placeholder="Enter email address" required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Submit
                <span className="sr-only">Submit</span>
            </button>
        </div>
    </div>
</form>
                </div>
                <p className="col-span-2 text-sm mt-5">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
            </div>
            
       
        </div>
    );
}; 

export default Footer;