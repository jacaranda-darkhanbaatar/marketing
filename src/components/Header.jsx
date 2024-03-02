import { DiApple, DiAndroid } from "react-icons/di";

const Header = () => {
  return (
    <header id="header" className="bg-gradient-to-b from-sky-200 p-28">
      <div className=" container mx-auto flex flex-wrap md:flex-nowrap justify-between lg:max-w-6xl mt-11 lg:p-28">
        <div className=" xl:mt-40 lg:ml-70 lg:mt-32 lg:grid-cols-2 lg:gap-x-8 mb-16 ml-0 max-w-xl">
          <h1 className="font-bold lg:text-6xl text-3xl">Team management mobile application</h1>
          <p className=" mb-8  text-xl lg:text-xl text-gray-500 mt-5">
            Start getting things done together with your team based<br/>
            on Pavo's revolutionary team management features
          </p>

          <button className="btn btn-primary px-9 py-3" href="#download-ios">
            <DiApple size={25} className="inline-block  mb-1" />
            Download
          </button>
          
            <button href="#download-android" className="btn btn-secondary px-9 py-3 lg:ml-4 mt-5 sm:mt-3  ml-1">
              <DiAndroid size={25} className="inline-block" />
              Download
            </button>
         

        </div>
        <div>
          <img src="images/header-smartphone.png" alt="alternative" className="inline lg:w-[900px] w-[3000px] pt-40"/>
        </div>
      </div>
     
    </header>
  );
};

export default Header;
