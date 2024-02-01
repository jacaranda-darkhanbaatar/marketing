import { FaChevronRight } from "react-icons/fa";

const Pricing = () => {
  const card = [
    {
      title: "STANDARD",
      currency: "$",
      value: "29",
      frequency: "monthly",
      blurb: "This basic package covers the marketing needs of small startups",
      one: "List building and relations",
      two: "Seamless platform integration",
      three: "Great performance on devices",
      four: "Community support and videos",
    },
    {
      title: "ADVANCED",
      currency: "$",
      value: "39",
      frequency: "monthly",
      blurb: "This is a more advanced package suited for medium companies",
      one: "List building and relations",
      two: "Seamless platform integration",
      three: "Great performance on devices",
      four: "Community support and videos",
    },
    {
      title: "COMPLETE",
      currency: "$",
      value: "49",
      frequency: "monthly",
      blurb: "This is a comprehensive package designed for big organizations",
      one: "List building and relations",
      two: "Seamless platform integration",
      three: "Great performance on devices",
      four: "Community support and videos",
    },
  ];

  return (
    <div
      id="pricing"
      className="pt-32 bg-cover text-center justify-center items-center"
      style={{ backgroundImage: "url(images/pricing-background.jpg)" }}
    >
      <div className="px-4 pb-px sm:px-8 max-w-6xl ">
        <h1 className="mb-2.5 text-white max-w-xl text-4xl font-bold">
          Pricing options for all budgets
        </h1>
        <p className="mb-16 text-white lg:max-w-3xl lg:mx-auto">
          Our pricing plans are setup in such a way that any user can start
          enjoying Pavo without worrying so much about costs. They are flexible
          and work for any type of industry.
        </p>
        {card.map((m) => (
          <div className="w-80 inline-block max-w-full bg-white mb-24 mx-5 border-solid rounded-lg border-slate-400">
            <div className="pt-12 px-7 pb-9">
              <div className="mb-4 text-pink-500 text-2xl text-center font-bold">
                {m.title}
              </div>
              <div>
                <span className="mr-1.5 align-[80%] text-3xl">
                  {m.currency}
                </span>
                <span className="text-7xl text-center font-semibold">
                  {m.value}
                </span>
              </div>
              <div className="mb-6 text-sm text-center text-slate-500">
                {m.frequency}
              </div>
              <p className="text-left mb-5 text-slate-500">{m.blurb}</p>
              <ul className="text-left mb-7 p-0 m-0 space-y-2">
                <li className="flex">
                  <FaChevronRight className="text-purple-500 text-sm m-1" />
                  <div className="flex ml-1">{m.one}</div>
                </li>
                <li className="flex">
                  <FaChevronRight className="text-purple-500 text-sm m-1" />
                  <div className="flex ml-1">{m.two}</div>
                </li>
                <li className="flex">
                  <FaChevronRight className="text-purple-500 text-sm m-1" />
                  <div className="flex ml-1">{m.three}</div>
                </li>
                <li className="flex">
                  <FaChevronRight className="text-purple-500 text-sm mt-1 ml-1" />
                  <div className="flex ml-1">{m.four}</div>
                </li>
              </ul>
              <div className="absolute text-center ">
                <a className="inline-block py-3 px-9 border 1px border-transparent rounded-[32px] bg-purple-600 text-white text-sm hover:bg-white hover:text-purple-600 hover:border-purple-600 font-bold duration-300">
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
