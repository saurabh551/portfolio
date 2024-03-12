import Home from "./components/home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About  from "./components/about";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div >
     <NavBar />
     <Home />
     <About />
     <Portfolio />
     <SocialLinks />
     <Experience />
     <Contact />
    </div>
  );
}

export default App;
