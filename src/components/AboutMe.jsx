import image from "../assets/foto.jpg";

import "../css/AboutMe.css";

const AboutMe = () => {
  return (
    <section className="content-about" id="about-me">
     
      <div className="image">
        <img src={image} alt="" />
        <div className="elevado"></div>
      </div>

      <div className="description">
        <h2>SOBRE MI</h2>
        <p>
          Soy un estudiante de programación y actualmente curso el 5to semestre
          de la carrera de &quot;Desarrollo de Sistemas de Información&quot;
          (una carrera de 3 años). Mi interés por la programación me ha llevado
          a complementar mi formación académica con estudios autodidactas. A
          través de ello, he adquirido conocimientos en CSS, JavaScript, React,
          Node, entre otros.
        </p>
        <p>
          A pesar de no tener experiencia profesional, he completado desafiantes
          proyectos personales, que me han ayudado a crecer como programador y a
          enfrentar problemas reales.
        </p>
        <h3>Mi Objetivo</h3>
        <p className="last">
          Busco un buen ambiente de trabajo en equipo donde pueda mejorar mis
          habilidades, adquirir experiencia y aprender
          diferentes formas de resolver problemas. También deseo profundizar
          tanto en el desarrollo front-end como en el back-end.
        </p>
      <div className="elevado2"></div>

      </div>
    </section>
  );
};

export default AboutMe;
