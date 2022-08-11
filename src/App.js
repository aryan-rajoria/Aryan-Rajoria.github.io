import Header from "./pages/portfolio/header/header";
import Stickyelement from "./components/stickyelement/portfoliosticky";
import Navbar from "./pages/portfolio/navbar/navbar";
import Aboutme from "./pages/portfolio/aboutme/aboutme";
import Pastexperience from "./pages/portfolio/pastexperience/pastexperience";
import Highlightprojects from "./pages/portfolio/highlightedprojects/highlights";
import Projects from "./pages/portfolio/projects/projects";
import Contactme from "./pages/portfolio/contactme/contactme";
import Footer from "./pages/portfolio/footer/footer";
import "./App.css";

function App() {
    return (
        <div>
            <Stickyelement />
            <Navbar />
            <Header />
            <Aboutme />
            <Pastexperience />
            <Highlightprojects />
            <Projects />
            <Contactme />
            <Footer />
        </div>
    );
}

export default App;
