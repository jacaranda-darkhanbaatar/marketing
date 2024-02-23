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
          <button className="btn btn-primary mr-4 px-10 py-3">
            <DiApple size={25} className="inline-block mr-1 mb-1" />
            Download
          </button>
          <button className="btn btn-secondary px-10 py-3">
            <DiAndroid size={25} className="inline-block mr-1 mb-1" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
