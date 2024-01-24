import Features from "../components/Features";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-sky-200">
        <Navbar />
        <Header />
      </div>
      <div>
        <Introduction />
        <Features />
      </div>
    </div>
  );
};

export default Home;
