

const Button = ({text}) => {
    return (
        <div>
            <button type="button" className=" w-full text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs md:text-sm px-1 md:px-5 py-1 md:py-2.5 inline-flex justify-center  items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
{text}
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
        </div>
    );
};

export default Button;