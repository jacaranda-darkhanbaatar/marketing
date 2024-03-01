import { IoIosArrowForward } from "react-icons/io";
const Details = () => {
    const details = [
        {

            description: "Features that will help you and your marketers",
        },
        {

            description: "Smooth learning curve due to the knowledge base",
        },
        {

            description: "Ready out-of-the-box with minor setup settings",
        },
    ];
    return (<header id="details">
        <div className="container mx-auto lg:flex   justify-between pt-32 px-4 gri grid-cols-12 gap-12 pb-10">

            <div className="mt-32 px-32  text-sm leading-3">
                <h1 className="font-bold text-5xl my-67">
                    Results driven ground breaking technology

                </h1>
                <p className="pt-3 text-gray-500 grid text-2xl ">
                    Based on our team's extensive experience in developing
                    line of business applications and constructive
                    customer feedback we reached a new level of revenue.
                </p>
                <p className="pt-3 text-gray-500 grid text-2xl ">
                    We enjoy helping small and medium sized tech businesses take a shot
                    at established Fortune 500 companies
                </p>

            </div>
            <div className="w-full  lg:p-0 p-24  inline ">
                <img src="images/details-1.jpg" alt="alternative" />
            </div>

        </div>
        <div className="container mx-auto   pt-32 px-4 grid grid-cols-1 lg:grid-cols-2  pb-10">
            <div className="pt-20 inline"><img src="images/details-2.jpg" alt="alternative" /></div>
            <div className=" pt-30 mt-32 lg:px-32 px-38 w-full">
                <div className="mt-12">
                    <h1 className="mb-6 font-bold text-5xl">Instant results for the marketing department</h1>
                    {/* <ul className="list mb-7 space-y-2">
                        <li className="flex">
                        <IoIosArrowForward  className=""/>

                            <div  className="text-gray-500 grid text-2xl pt-4">Features that will help you and your marketers</div>
                        </li>
                        <li className="flex">
                            <IoIosArrowForward />
                            <div className="text-gray-500 grid text-2xl pt-4">Smooth learning curve due to the knowledge base</div>
                        </li>
                        <li className="flex">
                             <IoIosArrowForward />
                            <div className="text-gray-500 grid text-2xl pt-4">Ready out-of-the-box with minor setup settings</div>
                        </li>
                    </ul> */}
                    {details.map((detail) => (
                        <ul>
                            <li className="flex ">
                                <div className="pt-5 text-indigo-700"><IoIosArrowForward /></div>
                                <div className="text-gray-500 grid text-1xl pt-4">{detail.description}</div>
                            </li>
                        </ul>


                    ))}

                </div>
                <div className="pt-4">
                    <a className="inline-block mr-3 px-6 py-3  rounded-full bg-indigo-700 text-white 
              
                hover:border 
                hover:border-indigo-700
                hover:bg-transparent 
                hover:text-indigo-700
                duration-200
                " href="#">Lightbox</a>
                    <a className="inline-block mr-3 px-8 py-3 rounded-full 
                border
                border-slate-950
                bg-transparent
                text-slate-950
                hover:bg-slate-950
                hover:text-white
                duration-200

                    ">Details</a>

                </div>
            </div>

        </div>
        <div className="container mx-auto flex justify-between pt-32 px-4 gri grid-cols-12 gap-12 pb-10">

            <div className="mt-32 px-32  text-sm leading-3">
                <h1 className="font-bold text-5xl my-67">
                    Results driven ground breaking technology

                </h1>
                <p className="pt-4 text-gray-500 grid text-2xl ">
                    Get a glimpse of what this app can do for your marketing automation and understand why
                    current users are so excited when using Pavo together with their teams.
                </p>
                <p className="pt-4 text-gray-500 grid text-2xl ">
                    We will promptly answer any questions and honor your requests
                    based on the service level agreement
                </p>

            </div>
            <div className="w-full  pt-20 inline ">
                <img src="images/details-3.jpg" alt="alternative" />
            </div>
        </div>

    </header>

    );
}

export default Details;