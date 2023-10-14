import "../css/Header.css";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [btnHamburguer, setBtnHamburguer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const aboutMeSection = document.querySelectorAll("section");
  const linkAboutMe = document.querySelectorAll(".links a");
  window.addEventListener("scroll", () => {
    aboutMeSection.forEach((section) => {
      const wTop = window.scrollY;
      const sectionTop = section.offsetTop - 160;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute("id");

      if (wTop >= sectionTop && wTop < sectionTop + sectionHeight) {
        linkAboutMe.forEach((link) => {
          link.classList.remove("active-link");
          document
            .querySelector(`nav a[href*=${id}]`)
            .classList.add("active-link");
        });
      }
    });
  });

  const handleBtnHamburguer = () => {
    setBtnHamburguer(!btnHamburguer);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => {
      const newIsDarkMode = !prevIsDarkMode;
      const body = document.querySelector("body");

      if (newIsDarkMode) {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
      return newIsDarkMode;
    });
  };

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div
          className={`links${btnHamburguer ? " nav-active" : ""}`}
          onClick={() => setBtnHamburguer(false)}
        >
          <a href="#start" className="active-link">
            INICIO
          </a>
          <a href="#about-me">SOBRE MI</a>
          <a href="#skills">HABILIDADES</a>
          <a href="#projects">PROYECTOS</a>
          <a href="#contact">CONTACTO</a>
        </div>

        <button className="toggle" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>

        <button className="hamburguer" onClick={handleBtnHamburguer}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
