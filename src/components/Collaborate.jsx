import Button from "./Button";


const Collaborate = () => {
    return (
        <div className="w-9/12 mx-auto mt-14">
            <div className="flex justify-end">
            <p  className="text-sm flex me-10 md:me-48 rotate-12 bg-yellow-300 px-3 w-fit rounded-xl">Your idea starts here</p>
            </div>
            <div className="flex-col gap-7 justify-center w-fit mx-auto items-center mt-10">
            
            <p className="text-5xl font-bold text-center ">Collaborate without <br />constraints</p>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-16 justify-evenly items-center mt-20">
            
                <div className="flex-col">
                    <p className="font-bold text-2xl">Easy integrations</p>
                    <p className="mt-5">Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <span className="text-blue-700">Marketplace.</span></p>
                </div>
                <div className="flex-col">
                    <p className="font-bold text-2xl">Security first</p>
                    <p className="mt-5">We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more 
at our <span className="text-blue-700">Trust Center.</span></p>
                </div>
                <div className="flex-col">
                    <p className="font-bold text-2xl">Free forever</p>
                    <p className="mt-5">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our  
<span className="text-blue-600"> pricing plans</span> for more features.</p>
                </div>

            </div>
            <div className="flex justify-center mt-14">
            <Button text={"Sign up free"}></Button>
            </div>
        </div>
    );
};

export default Collaborate;