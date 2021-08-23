import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portofolio from "./components/portofolio/Portofolio";
import Works from "./components/works/Works";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuValue={isMenuOpen} setMenu={setIsMenuOpen} />
      <Menu menuValue={isMenuOpen} setMenu={setIsMenuOpen} />
      <div className="sections">
        <Intro />
        <div className="long">
          <Portofolio />
        </div>
        {/* <Works /> */}
        <div className="long">
          <div className="spacer layer1"></div>
          <Skills />
          <div className="spacer layer1 flip"></div>
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
