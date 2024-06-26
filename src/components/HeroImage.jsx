import "../css/HeroImage.css";

const HeroImage = () => {
  return (
    <section className="content-hero-image" id="start">
      <div className="rgba">
        <div className="info">
          <p>Hola, me presento:</p>
          <h1>DANILO VILLAVICENCIO</h1>
          <p className="p">Desarrollador Fullstack</p>
          <a
            href="https://drive.google.com/file/d/1QtUAHpdgu0EIsxS8EMyTNubcAoK5R1iL/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            OBSERVAR CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
