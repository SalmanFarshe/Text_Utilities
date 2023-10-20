import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import LogIN from "./Components/LogIN";
import About from "./Components/About";

function App() {
  return (
    <>
      <NavBar
        brandName="TexTor"
        itemOne="Home"
        itemTwo="About"
        itemThree="Join Us"
        />
        <About/>
        <LogIN />
      <TextForm />
    </>
  );
}

export default App;
