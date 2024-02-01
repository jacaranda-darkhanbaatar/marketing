import { DiApple, DiAndroid } from "react-icons/di";

const Download = () => {
  return (
    <div
      id="download"
      className="text-left pt-[72px] pb-[120px] bg-cover"
      style={{ backgroundImage: "url(images/conclusion-background.jpg)" }}
    >
      <div className="max-w-[72rem] mx-auto px-4 lg:grid lg:grid-cols-2">
        <div className="mb-16 lg:mb-0">
          <img
            src="images/conclusion-smartphone.png"
            alt="picture"
            className="align-middle block"
          ></img>
        </div>
        <div className="lg:mt-24 xl:mt-44 xl:ml-12">
          <p className="mb-9 text-gray-800 text-3xl leading-10">
            Team management mobile applications don’t get much better than Pavo.
            Download it today
          </p>
          <a className="inline-block py-3 px-9 border border-transparent rounded-[32px] bg-purple-600 text-white text-sm hover:bg-white hover:text-purple-600 hover:border-purple-600 font-bold duration-300 mr-[0.5rem]">
            <DiApple size={25} className="inline-block mr-1 mb-1" />
            Download
          </a>
          <a className="inline-block py-3 px-9 border border-transparent rounded-[32px] bg-pink-500 text-white text-sm hover:bg-white hover:text-pink-500 hover:border-pink-500 font-bold duration-300 ml-[0.5rem]">
            <DiAndroid size={25} className="inline-block mr-1 mb-1" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
