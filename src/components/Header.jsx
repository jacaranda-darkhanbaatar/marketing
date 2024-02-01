import { DiApple, DiAndroid } from "react-icons/di";

const Header = () => {
  return (
    <header id="header" className="bg-gradient-to-b from-sky-200 py-28 md:pt-36 xl:pt-44">
      <div className="flex flex-between items-center">
        <div className="ml-40">
          <h1 className="font-bold text-6xl mb-7 text-balance">
            Team management mobile application
          </h1>
          <p className="text-slate-500 text-2xl text-balance mb-7">
            Start getting things done together with your team based on Pavo's
            revolutionary team management features
          </p>
          <a
            className="inline-block leading-none border border-transparent bg-indigo-600 rounded-full text-white font-bold px-10 py-4 mr-4 hover:border-indigo-600 hover:bg-transparent hover:text-indigo-600 duration-300"
            href="#download-ios"
          >
            <DiApple size={25} className="inline-block mr-1 mb-1" />
            Download
          </a>
          <a
            className="inline-block leading-none border border-transparent bg-pink-500 rounded-full text-white font-bold px-10 py-4 hover:border-pink-500 hover:bg-transparent hover:text-pink-500 duration-300"
            href="#download-android"
          >
            <DiAndroid size={25} className="inline-block mr-1 mb-1" />
            Download
          </a>
        </div>
        <div>
          <img
            src="images/header-smartphone.png"
            alt="alternative"
            className="mr-72"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
