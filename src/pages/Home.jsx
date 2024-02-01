import Copyright from "../components/Copyright";
import Download from "../components/Download";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Stats from "../components/Stats";
import Stuff from "../components/Stuff";
import Testomony from "../components/Testomony";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Introduction />
      <Features />
      <Stuff />
      <Stats />
      <Testomony />
      <Pricing />
      <Download />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
