import { IoIosArrowForward } from "react-icons/io";
const Pricing = () => {
    const pricing = [
        {
            title: "STANDARD",
            currency: '$',
            value: 29,
            time: "monthly",
            description: "This basic package covers the marketing needs of small startups",
            list: ["List building and relations",
                "Seamless platform integration",
                "Great performance on devices",
                "Community support and videos",]
        },
        {
            title: "ADVANCED",
            currency: '$',
            value: 39,
            time: "monthly",
            description: "This is a more advanced package suited for medium companies",
            list: ["List building and relations",
                "Seamless platform integration ",
                "Great performance on devices",
                "Community support and videos"]
        },
        {
            title: "COMPLETE",
            currency: '$',
            value: 49,
            time: "monthly",
            description: "This is a comprehensive package designed for big organizations",
            list: ["List building and relations",
                "Seamless platform integration",
                "Great performance on devicesc",
                "Community support and videos"]
        }
    ]
    return (
        <div className="relative flex justify-center items-center bg-cover pt-32 text-center" style={{ backgroundImage: 'linear-gradient(rgba(50,60,70,0.9), rgba(50,60,70,0.9)),   url(images/pricing-background.jpg)' }} >
            <div className="absolute bottom-0 h-40 w-full bg-white"></div>
            <div>
                <h2 className="pt-20 text-center text-4xl font-bold text-white">Pricing options for all budgets</h2>
                {pricing.map((pricing) => (
                    <div className="relative inline-block w-80 bg-white max-w-full border border-solid rounded-lg border-slate-400 mb-24 mx-5 ">
                        <div className="pt-12 px-7 pb-9">
                            <div className="text-rose-600 font-mono text-2xl text-center font-bold">
                                <h2>{pricing.title}</h2>
                            </div>
                            <div className="text-center">
                                <span className="mr-1.5 align-[80%] text-3xl">{pricing.currency}</span>
                                <span className="text-7xl text-center font-semibold">{pricing.value}</span>
                            </div>
                            <div className="mb-6 text-sm text-center font-semibold">
                                {pricing.time}
                            </div>
                            <div className="text-left mb-5 text-slate-500">
                                {pricing.description}
                            </div>
                            <div className="text-left mb-7 p-0 m-0 space-y-2">
                                {pricing.list.map(price => <div className="flex items-center p-2 mb-4 text-gray-500 text-sm"><IoIosArrowForward className="text-indigo-700 text-sm mt-1 ml-1" /><div className="ml-1">{price}</div></div>)}
                            </div>
                            <div className="absolute right-0 left-0 bottom-[-1.5rem] text-center">
                                <button className="btn btn-primary hover:bg-white px-8 py-3">Download</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>);
}

export default Pricing;