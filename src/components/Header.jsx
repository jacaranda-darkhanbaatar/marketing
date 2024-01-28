import { DiApple, DiAndroid } from "react-icons/di";

const Header = () => {
  return (
    <header id="header" className="bg-gradient-to-b from-sky-200 p-28">
      <div className="container mx-auto flex justify-between">
        <div className="mt-32">
          <h1 className="font-bold text-6xl my-67">
            Team management 
            mobile application</h1>
          <p className="text-gray-400 grid text-3xl pt-4">
            Start getting things done together with your team based on Pavo's                                                
            revolutionary team management features
          </p>
          <a className="inline-block leading-none pt-4 rounded-full  bg-purple-500 px-3 py-4 text-white hover:bg-transparent hover:border-2 hover:border-purple-500 mr-3 hover:text-purple-500"  href="#download-ios">
            <DiApple size={25}  className="inline-block"/>
            Download
          </a>
          <a className="inline-block leading-none pt-4 bg-pink-500 rounded-full py-3 px-4 text-white hover:bg-transparent hover:border-2 hover:border-pink-500  hover:text-pink-500" href="#download-android">
            <DiAndroid size={25} className="inline-block"/>
            Download
          </a>
        </div>
        <div className="w-full">
          <img src="images/header-smartphone.png" alt="alternative" />
        </div>
      </div>
    </header>
  );
};

export default Header;
