import { DiApple, DiAndroid } from "react-icons/di";

const Header = () => {
  return (
    <header
      id="header"
      className="bg-gradient-to-b from-sky-200 py-28 md:pt-36 xl:pt-44"
    >
      <div className="mx-auto px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12 ml-40">
          <h1 className="font-bold text-6xl mb-5 text-balance">
            Team management mobile application
          </h1>
          <p className="text-slate-500 text-2xl text-balance mb-8">
            Start getting things done together with your team based on Pavo's
            revolutionary team management features
          </p>
          <button className="btn btn-primary mr-4 px-10 py-4"> 
            <DiApple size={25} className="inline-block mr-1 mb-1" />
            Download
          </button>
          <button className="btn btn-secondary px-10 py-4">
            <DiAndroid size={25} className="inline-block mr-1 mb-1" />
            Download
          </button>
        </div>
        <div className="xl:text-right">
          <img
            src="images/header-smartphone.png"
            alt="alternative"
            className="mr-72 md-hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
