import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portofolio from "./components/portofolio/Portofolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "./context";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Color scheme will be dark mode if requested by user's system
  const { setIsDarkMode } = useGlobalContext();
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div className="app">
      <Topbar menuValue={isMenuOpen} setMenu={setIsMenuOpen} />
      <Menu menuValue={isMenuOpen} setMenu={setIsMenuOpen} />
      <div className="sections">
        <Intro />
        <div className="long">
          <Portofolio />
        </div>
        <div className="long">
          <div className="spacer layer1"></div>
          <div className="">
            <Skills />
          </div>
          {/* <div className="spacer layer1 flip"></div> */}
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
