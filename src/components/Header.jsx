import { DiApple, DiAndroid } from "react-icons/di";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-sky-200 p-28">
      <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="mb-16 xl:mt-40 xl:mr-12">
          <h1 class="text-5xl mb-5 font-semibold text-gray-900">
            Team management mobile application
          </h1>
          <p class="p-large mb-8">
            Start getting things done together with your team based on Pavo's
            revolutionary team management features
          </p>
          <a
            class="bg-indigo-500 px-6 py-3 rounded-3xl text-white font-semibold inline-block line-clamp-none leading-none"
            href="#download-ios"
          >
            <DiApple size={25} className="inline-block" />
            Download
          </a>
          <a
            class="ml-3 bg-pink-500 px-6 py-3 rounded-3xl text-white font-semibold inline-block leading-none"
            href="#download-android"
          >
            <DiAndroid size={25} className="inline-block" />
            Download
          </a>
        </div>
        <div class="xl:text-right">
          <img
            class="inline"
            src="images/header-smartphone.png"
            alt="alternative"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
