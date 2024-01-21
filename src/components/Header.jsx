import { DiApple, DiAndroid } from "react-icons/di";

const Header = () => {
  return (
    <header id="header">
      <div>
        <div>
          <h1>Team management mobile application</h1>
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
          <img src="images/header-smartphone.png" alt="alternative" />
        </div>
      </div>
    </header>
  );
};

export default Header;
