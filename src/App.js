import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import LogIN from "./Components/LogIN";

function App() {
  return (
    <>
      <NavBar
        brandName="TexTor"
        itemOne="Home"
        itemTwo="About"
        itemThree="Blog"
      />
        <LogIN />
      <TextForm />
    </>
  );
}

export default App;
