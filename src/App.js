import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import LogIN from "./Components/LogIN";
import About from "./Components/About";
import { useState } from "react";
function App() {
  const [colorTheme, setcolorTheme] = useState('dark')
  const changeTheme = () => {
    if (colorTheme === 'dark') {
      setcolorTheme('white')
    }
    else {
      setcolorTheme('dark')
    }
  };
  return (
    <>
      <NavBar
        brandName="TexTor"
        itemOne="Home"
        itemTwo="About"
        itemThree="Join Us"
        themeFunc={changeTheme}
        themecolor={colorTheme}
      />
      <About />
      <LogIN />
      <TextForm />
    </>
  );
}

export default App;
