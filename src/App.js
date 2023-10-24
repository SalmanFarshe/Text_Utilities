import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import LogIN from "./Components/LogIN";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";

let bg = "#0D1117";

function App() {
  document.body.style.color = "white";
  const [defaultBackgroundColorTheme, setdefaultBackgroundColorTheme] =
    useState("black");
  const changeTheme = () => {
    setdefaultBackgroundColorTheme("#00000095");
    bg = document.body.style.backgroundColor = "#000000dd";
  };
  const changeThemeone = () => {
    setdefaultBackgroundColorTheme("#007bff95");
    bg = document.body.style.backgroundColor = "#007bff95";
  };
  const changeThemetwo = () => {
    setdefaultBackgroundColorTheme("#6C75aa95");
    bg = document.body.style.backgroundColor = "#6C75aa95";
  };
  const changeThemethree = () => {
    setdefaultBackgroundColorTheme("#28a74595");
    bg = document.body.style.backgroundColor = "#28a74595";
  };
  const changeThemefour = () => {
    setdefaultBackgroundColorTheme("#6f42c195");
    bg = document.body.style.backgroundColor = "#6f42c195";
  };
  const changeThemefive = () => {
    setdefaultBackgroundColorTheme("#ffc10795");
    bg = document.body.style.backgroundColor = "#ffc10795";
  };
  document.body.style.backgroundColor = bg;
  
  const [alertt, setalert] = useState(null);
  const aletmsg = (msg) => {
    setalert({
      msg: msg
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  return (
    <>
      <NavBar
        brandName="TexTor"
        itemOne="Home"
        itemTwo="About"
        itemThree="Join Us"
        themeFunc={changeTheme}
        themeFunc1={changeThemeone}
        themeFunc2={changeThemetwo}
        themeFunc3={changeThemethree}
        themeFunc4={changeThemefour}
        themeFunc5={changeThemefive}
        themeColorBackground={defaultBackgroundColorTheme}
      />
      <Alert alertt={alertt} />
      <TextForm
        alertmdg={aletmsg}
        themeColorBackground={defaultBackgroundColorTheme}
      />
      <LogIN themeColorBackground={defaultBackgroundColorTheme} />
      <About />
    </>
  );
}

export default App;
