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
  const handleSelect = (index) => {
    if (selectedPlayers.includes(index)) {
      setSelectedPlayers(selectedPlayers.filter((i) => i !== index));
    } else {
      setSelectedPlayers([...selectedPlayers, index]);
    }
  };

  return (
    <>
      <Navbar />
      <Banner />
      <Tab selectedType={selectedType} setSelectedType={setSelectedType} />
      {selectedType === "Avialable" ? (
        <Player
          playerPromise={playerPromise}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          handleSelect={handleSelect}
        />
      ) : (
        <Selected />
      )}
      <Footer />
    </>
  );
}

export default App;
