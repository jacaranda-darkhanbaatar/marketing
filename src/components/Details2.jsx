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
            <div className=" px-4 lg:grid lg:grid-cols-12 xl:gap-x-12 text-center md:text-left">

                <div className="col-span-7">
                    <img src={details.image} alt={details.title} />
                </div>
                <div className="col-span-5 mt-20">
                    <h2 className="font-bold text-3xl mb-6">{details.title}</h2>

                    <div>
                        {details.descriptions.map(desc => <div className="flex items-center p-2 mb-4 text-gray-500 text-lg"><IoIosArrowForward  className="text-indigo-700"/><div>{desc}</div></div>)}
                    </div>
                    <div>
                        <button className="btn btn-primary py-2 px-9 ml-2">Lightbox</button>
                        <button className="btn btn-outline py-2 px-10 lg:ml-4 mt-5 sm:mt-3  ml-1">Details</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details2;