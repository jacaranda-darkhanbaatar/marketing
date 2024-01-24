import { DiApple, DiAndroid } from "react-icons/di";

const Header = () => {
  return (
    <header id="header" className="bg-gradient-to-b from-sky-200 p-28">
      <div className=" container mx-auto px-4 grid grid-cols-2 gap-x-8">
        <div class="mb-16 xl:mt-40 xl:mr-12 ">
          <h1 className="text-5xl font-semibold text-gray-600 font-sans">Team management mobile application</h1>
          <p className="py-8 text-xl text-gray-500">
            Start getting things done together with your team based on Pavo's
            revolutionary team management features
          </p>
          <a
            className="inline-block leading-none bg-indigo-500 px-6 py-3 rounded-3xl text-white font-semibold"
            href="#download-ios"
          >
            <DiApple size={25} className="inline-block" />
            Download
          </a>
          <a className="inline-block leading-none" href="#download-android">
            <DiAndroid size={25} className="inline-block" />
            Download
          </a>
        </div>
        <div>
          <img src="images/header-smartphone.png" alt="alternative" />
        </div>
      </div>
    </header>
  );
};

export default Header;
