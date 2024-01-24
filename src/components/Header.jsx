import { DiApple, DiAndroid } from "react-icons/di";

const Header = () => {
  return (
    <header id="header" className="bg-gradient-to-b from-sky-200 p-28">
      <div className="container mx-auto flex justify-between ">
        <div className="grid">
          <h1 className="font-bold text-6xl my-67">
            Team management 
            mobile application</h1>
          <p className="text-gray-400 grid">
            Start getting things done together with your team based on Pavo's
            revolutionary team management features
          </p>
          <a className="inline-block leading-none rounded-lg bg-purple-500" href="#download-ios">
            <DiApple size={25} className="inline-block" />
            Download
          </a>
          <a className="inline-block leading-none rounded-lg bg-pink-500" href="#download-android">
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
