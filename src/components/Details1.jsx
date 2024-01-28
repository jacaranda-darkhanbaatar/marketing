const Details1 = () => {
    const details =
    {
        image: "images/details-1.jpg",
        title: "Result driven ground breaking technology",
        description_1:
            "Based on our team's extensive experience in developing line of business applications and constructive customer feedback we reached a new level of revenue.",
        description_2:
            "We enjoy helping small and medium sized tech businesses take a shot at established Fortune 500 companies",
    }



    return (
        <div id="details" className="pt-12 pb-16 container mx-auto max-w-6xl">
            <div className=" px-4 grid grid-cols-12 gap-x-12 ">

                <div className="col-span-5 mt-40">
                    <div className="mb-16">
                        <h2 className="font-bold text-4xl mb-6">{details.title}</h2>
                        <p className="mb-4 text-gray-500 text-lg">{details.description_1}</p>
                        <p className="mb-4 text-gray-500 text-lg">{details.description_2}</p>
                    </div>
                </div>
                <div className="col-span-7 mt-20">
                        <img src={details.image} alt={details.title} />                   
                </div>


            </div>
        </div>
    );
};

export default Details1;