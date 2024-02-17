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

          <button className="btn btn-primary px-9 py-3" href="#download-ios">
            <DiApple size={25} className="inline-block  mb-1" />
            Download
          </button>
          
            <button href="#download-android" className="btn btn-secondary px-9 py-3 ml-3">
              <DiAndroid size={25} className="inline-block" />
              Download
            </button>
         

        </div>
        <div>
          <img src="images/header-smartphone.png" alt="alternative" />
        </div>
      </div>
     
    </header>
  );
};

export default Header;
