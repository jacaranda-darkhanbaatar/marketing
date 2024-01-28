import { DiApple, DiAndroid } from "react-icons/di";

const Header = () => {
  return (
    <header id="header" className="bg-gradient-to-b from-sky-200 p-28">
      <div className=" container mx-auto flex justify-between max-w-6xl mt-11">
        <div className="mt-40 ml-70">
          <h1 className="font-bold text-6xl">Team management</h1>

          <h1 className="font-bold text-6xl"> mobile application</h1>
          <p className="p-large mb-8 text-xl text-gray-500 mt-5">
            Start getting things done together with your team based<br/>
            on Pavo's revolutionary team management features
          </p>

          <a className="inline-block leading-none  bg-purple-700 rounded-full px-3 py-4 text-white hover:bg-transparent hover:border-2 hover:border-purple-500 mr-3 hover:text-purple-500" href="#download-ios">
            <DiApple size={25} className="inline-block" />
            Download
          </a>
          
            <a className="inline-block leading-none  bg-pink-500 rounded-full py-3 px-4 text-white hover:bg-transparent hover:border-2 hover:border-pink-500 hover:text-pink-500" href="#download-android">
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
