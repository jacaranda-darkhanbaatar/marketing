import { IoIosArrowForward } from "react-icons/io";
const Details2 = () => {
    const details =

    {
        image: "images/details-2.jpg",
        title: "Instant results for the marketing department",
        descriptions: ["Features that will help you and your marketers",
            "Smooth learning curve due to the knowledge base",
            "Ready out-of-the-box with minor setup settings",]
    }


    return (
        <div id="details" className="pt-12 pb-16 container mx-auto max-w-6xl">
            <div className=" px-4 grid grid-cols-12 gap-x-12">

                <div className="col-span-7">
                    <img src={details.image} alt={details.title} />
                </div>
                <div className="col-span-5 mt-20">
                    <h2 className="font-bold text-3xl mb-6">{details.title}</h2>

                    <div>
                        {details.descriptions.map(desc => <div className="flex items-center p-2 mb-4 text-gray-500 text-lg"><IoIosArrowForward  className="text-indigo-700"/><div>{desc}</div></div>)}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details2;