import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import LogIN from "./Components/LogIN";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import TextTorHome from "./Components/TextTorHome";
import AboutDetails from "./Components/AboutDetails";

let bg = "#0D1117";

function App() {
  document.body.style.color = "white";
  const [defaultBackgroundColorTheme, setdefaultBackgroundColorTheme] =
    useState("black");
  const changeTheme = () => {
    setdefaultBackgroundColorTheme("#00000095");
    bg = document.body.style.backgroundColor = "#000000dd";
    document.title = "Text Utiles - Solid Dark mode";
  };
  const changeThemeone = () => {
    setdefaultBackgroundColorTheme("#007bff95");
    bg = document.body.style.backgroundColor = "#007bff95";
    document.title = "Text Utiles - Solid Blue mode";
  };
  const changeThemetwo = () => {
    setdefaultBackgroundColorTheme("#6C75aa95");
    bg = document.body.style.backgroundColor = "#6C75aa95";
    document.title = "Text Utiles - Solid Gray mode";
  };
  const changeThemethree = () => {
    setdefaultBackgroundColorTheme("#28a74595");
    bg = document.body.style.backgroundColor = "#28a74595";
    document.title = "Text Utiles - Solid Green mode";
  };
  const changeThemefour = () => {
    setdefaultBackgroundColorTheme("#6f42c195");
    bg = document.body.style.backgroundColor = "#6f42c195";
    document.title = "Text Utiles - Solid Purple mode";
  };
  const changeThemefive = () => {
    setdefaultBackgroundColorTheme("#ffc10795");
    bg = document.body.style.backgroundColor = "#ffc10795";
    document.title = "Text Utiles - Solid Gold mode";
  };
  document.body.style.backgroundColor = bg;

  const [alertt, setalert] = useState(null);
  const aletmsg = (msg) => {
    setalert({
      msg: msg,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <Router>
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
      <Routes>
        <Route
          path="/home"
          element={
            <TextForm
              alertmdg={aletmsg}
              themeColorBackground={defaultBackgroundColorTheme}
            />
          }
        />
        <Route
          path="/Signin"
          element={<LogIN themeColorBackground={defaultBackgroundColorTheme} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/textor" element={<TextTorHome />} />
        <Route path="/details" element={<AboutDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
