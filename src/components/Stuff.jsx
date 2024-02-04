import { FaChevronRight } from "react-icons/fa";

const Stuff = () => {
  return (
    <div id="details">
      <div className="flex flex-row mt-40 mb-40">
        <div className="flex justify-center items-center flex-col mx-60">
          <h1 className="font-bold text-5xl mb-8">
            Results driven ground breaking technology
          </h1>
          <div className="text-slate-500 text-2xl">
            <p className="mb-4">
              Based on our team's extensive experience in developing line of
              business applications and constructive customer feedback we
              reached a new level of revenue.
            </p>
            <p>
              We enjoy helping small and medium sized tech businesses take a
              shot at extablished Fortune 500 companies.
            </p>
          </div>
        </div>
        <div className=" mr-60">
          <img
            src="images/details-1.jpg"
            alt="alternative"
            className="h-auto max-w-xl"
          />
        </div>
      </div>
      <div className="flex flex-row mt-40">
        <div div className=" ml-60">
          <img
            src="images/details-2.jpg"
            alt="alternative"
            className="h-auto max-w-xl"
          />
        </div>
        <div div className="flex justify-center items-center flex-col mx-60">
          <h1 className="font-bold text-5xl mb-8">
            Instant results for the marketing department
          </h1>
          <ul className="mb-7 space-y-2 text-slate-500 text-2xl mr-16">
            <li className="flex">
              <FaChevronRight  className="text-purple-500 text-sm mt-2" />
              Features that will help you and your marketers
            </li>
            <li className="flex">
              <FaChevronRight  className="text-purple-500 text-sm mt-2" />
              Smooth learning curve due to the knowledge base
            </li>
            <li className="flex">
              <FaChevronRight  className="text-purple-500 text-sm mt-2" />
              Ready out-of-the-box with minor setup settings
            </li>
          </ul>
          <div className="mt-5 flex">
            <a
              className="inline-block leading-none border border-transparent bg-indigo-600 rounded-full text-white font-bold px-10 py-4 mr-4 hover:border-indigo-600 hover:bg-transparent hover:text-indigo-600 duration-300"
              href="#Light"
            >
              Lightbox
            </a>
            <a
              className="inline-block leading-none border border-slate-600 bg-transparent rounded-full text-slate-600 font-bold px-10 py-4 mr-72 hover:border-transparent hover:bg-slate-600 hover:text-white duration-300"
              href="#Detail"
            >
              Details
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-40 mb-40">
        <div className="flex justify-center items-center flex-col mx-60">
          <h1 className="font-bold text-5xl mb-8">
            Platform integration and life time free updates
          </h1>
          <div className="text-slate-500 text-2xl">
            <p className="mb-4">
              Get a glipmse of what this app can do for your marketing
              automation and understand why current users are so excited when
              using Pavo together with their teams.
            </p>
            <p>
              We will promptly answer any questions and honor your requests
              based on the service level agreement.
            </p>
          </div>
        </div>
        <div className=" mr-60">
          <img
            src="images/details-3.jpg"
            alt="alternative"
            className="h-auto max-w-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Stuff;
