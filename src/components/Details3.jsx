const Details3 = () => {
    const details = {
        image: "images/details-3.jpg",
        title: "Platform integration and life time free updates",
        description_1:
            "Get a glimpse of what this app can do for your marketing automation and understand why current users are so excited when using Pavo together with their teams.",
        description_2:
            "We will promptly answer any questions and honor your requests based on the service level agreement",
    };


    return (
        <div id="details" className="pt-12 pb-16 container mx-auto max-w-6xl">
            <div className="px-4 grid grid-cols-12 gap-x-12">

                
                <div className="col-span-5">
                    <div className="mb-16">
                        <h2 className="font-bold text-3xl mb-6">{details.title}</h2>
                        <p className="mb-4 text-gray-500 text-lg">{details.description_1}</p>
                        <p className="mb-4 text-gray-500 text-lg">{details.description_2}</p>
                    </div>
                </div>
                <div className="col-span-7">
                    <img src={details.image} alt={details.title} />
                </div>


            </div>
        </div>
    );
};

export default Details3;