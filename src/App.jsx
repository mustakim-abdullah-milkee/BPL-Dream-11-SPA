import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import PlayerButtonGroup from "./components/PlayerButtonGroup/PlayerButtonGroup";

function App() {
  return (
    <div
      className="
        container
        mx-auto
        sora-font
      "
    >
      <NavBar />
      <Hero />
      <PlayerButtonGroup />
    </div>
  );
}

export default App;
