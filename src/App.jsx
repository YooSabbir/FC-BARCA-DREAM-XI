import "./App.css";
import Banner from "./componants/Banner";
import Navbar from "./componants/Navbar";
import Footer from "./componants/Footer";
import Tab from "./componants/Tab";
import Player from "./componants/Player";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const playerPromise = fetchPlayer();

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Tab />
      <Player playerPromise={playerPromise} />
      <Footer />
    </>
  );
}

export default App;
