import Counter from "../components/Counter";
import Details from "../components/Details";
import Features from "../components/Features";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import TeamMates from "../components/TeamMates";

const Home = () => {
  return <div>
    <Navbar />
    <Header />
    <Introduction />
    <Features />
    <Details />
    <Counter/>
    <TeamMates/>
  </div>;
};

export default Home;
