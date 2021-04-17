import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Experiences from "./Experiences";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <div id="experiences" className="experiences">
        <Experiences />
      </div>
      <footer>
        <h4>
          <a href="http://alisson-rodrigues.netlify.app/">
            {"</> Criado por Alisson Rodrigues </>"}
          </a>
        </h4>
      </footer>
    </main>
  );
}

export default App;
