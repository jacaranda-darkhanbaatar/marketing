
import Counter from "../components/Counter";
import Details1 from "../components/Details1";
import Details2 from "../components/Details2";
import Details3 from "../components/Details3";
import Download from "../components/Download";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import TeamMates from "../components/TeamMates";

const Home = () => {
  return <div>
    <Navbar />
    <Header />
    <Introduction />
    <Features />
    <Details1 />
    <Details2 />
    <Details3 />
    <Counter />
    <TeamMates />
    <Pricing />
    <Download />
    <Footer />

  </div>;
};

export default Home;
