import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <HeroImage />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />    
    </>
  );
};

export default Home;
