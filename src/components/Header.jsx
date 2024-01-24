import { DiApple, DiAndroid } from "react-icons/di";

const Header = () => {
  return (
    <header id="header" className="bg-gradient-to-b from-sky-200 p-28">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-5xl">Team management</h1>
            
           <h1 className="font-bold text-5xl"> mobile application</h1>
          <p>
            Start getting things done together with your team based on Pavo's
            revolutionary team management features
          </p>
          <a className="inline-block leading-none" href="#download-ios">
            <DiApple size={25} className="inline-block" />
            Download
          </a>
          <a className="inline-block leading-none" href="#download-android">
            <DiAndroid size={25} className="inline-block" />
            Download
          </a>
        </div>
        <div>
          <img src="images/header-smartphone.png" alt="alternative" className=" absolute right-20 top-50"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
