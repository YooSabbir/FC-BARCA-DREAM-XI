import "./App.css";
import Banner from "./componants/Banner";
import Navbar from "./componants/Navbar";
import Footer from "./componants/Footer";
import Tab from "./componants/Tab";
import Player from "./componants/Player";
import { useState } from "react";
import Selected from "./componants/Selected";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const playerPromise = fetchPlayer();

function App() {
  const [selectedType, setSelectedType] = useState("Avialable");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [coin, setCoin] = useState("$ 1,000,000,000");

  return (
    <>
      <Navbar coin={coin} />
      <Banner />
      <Tab selectedType={selectedType} setSelectedType={setSelectedType} />
      {selectedType === "Avialable" ? (
        <Player
          playerPromise={playerPromise}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        />
      ) : (
        <Selected
          playerPromise={playerPromise}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
