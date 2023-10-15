import { useState } from "react";

import videoUser from "../assets/ernd-user.mp4";
import videoEmployee from "../assets/ernd-dashboard.mp4";
import videoCrud from "../assets/crn.mp4";
import projectMovie from "../assets/project-movie.png";
import projectMovie2 from "../assets/project-movie2.png";

import react from "../assets/react.png";
import node from "../assets/node.png";
import mysql from "../assets/mysql.png";

import "../css/Projects.css";

const Projects = () => {
  const [movieImage, setMovieImage] = useState(false);

  const handleMouseOver = () => {
    setMovieImage(true);
  };

  const handleMouseOut = () => {
    setMovieImage(false);
  };

  return (
    <section className="content-projects" id="projects">
      <h2>Mis Proyectos</h2>
      <div className="item-project">
        <div className="info">
          <h3>Ecommerce</h3>
          <p>
            Se trata de una plataforma de compras en línea que permite a los
            usuarios explorar diversas categorías, ver productos, agregar
            artículos al carrito y realizar compras. Para acceder al carrito de
            compras, es necesario iniciar sesión en la plataforma. La sección de
            &quot;Mis Compras&quot; muestra los productos que el usuario ha
            seleccionado para comprar o ya ha adquirido.
          </p>
          <p>
            Además, la plataforma cuenta con un panel de administración que
            ofrece una amplia gama de funciones CRUD para gestionar y
            administrar el contenido y la configuración de la plataforma de
            manera eficiente.
          </p>
          <figure>
            <img src={react} alt="React" />
            <img src={node} alt="JavaScript" />
            <img src={mysql} alt="JavaScript" className="mysql" />
          </figure>
          <a
            href="https://github.com/Danil04ndre/ecommerce-react-nodejs-db"
            target="_blank"
            rel="noreferrer"
          >
            Repositorio <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="video">
          <video src={videoUser} controls className="a">
            <div className=""></div>
          </video>
        </div>
      </div>
      <div className="item-project">
        <div className="info">
          <h3>Dashboard</h3>
          <p>
            Nuestro panel de empleado en el eCommerce es donde pueden iniciar
            sesión, agregar o eliminar productos. Muestra los productos que han
            agregado por ese mismo y los de otros empleados en general, y
            cualquier cambio ya sea agregado o eliminado se reflejara en el
            proyecto &quot;Ecommerce&quot;
          </p>

          <figure>
            <img src={react} alt="React" />
            <img src={node} alt="JavaScript" />
            <img src={mysql} alt="JavaScript" className="mysql" />
          </figure>
          <a
            href="https://github.com/Danil04ndre/ecommerce-react-nodejs-db"
            target="_blank"
            rel="noreferrer"
          >
            Repositorio <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="video">
          <video src={videoEmployee} controls className="b">
            <div className=""></div>
          </video>
        </div>
      </div>
      <div className="item-project">
        <div className="info">
          <h3>MovieDB - API TMDB</h3>
          <p>
            Este proyecto se basa en la API de{" "}
            <a
              href="https://developer.themoviedb.org/docs"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              The Movie Database
            </a>{" "}
            (TMDb) brinda información detallada sobre películas, actores,
            tráilers y más. Además, cuenta con una función de búsqueda que
            permite explorar y encontrar tanto películas como series de interés.
            (responsivo)
          </p>

          <figure className="figure">
            <img src={react} alt="React" />
          </figure>
          <a
            href="https://github.com/Danil04ndre/react-movie-app"
            target="_blank"
            rel="noreferrer"
          >
            Repositorio <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://react-movie-app-danil04ndre.vercel.app/"
            className="link-page"
            target="_blank"
            rel="noreferrer"
          >
            Ver pagina
          </a>
        </div>
        <div className="video image-project">
          <img
            className="a"
            src={!movieImage ? projectMovie : projectMovie2}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>
      </div>
      <div className="item-project">
        <div className="info">
          <h3>CRUD</h3>
          <p>
            Este proyecto permite a los usuarios realizar operaciones de Crear,
            Leer, Actualizar y Eliminar (CRUD) en un conjunto de datos.
          </p>

          <figure>
            <img src={react} alt="React" />
            <img src={node} alt="JavaScript" />
            <img src={mysql} alt="JavaScript" className="mysql" />
          </figure>
          <a
            href="https://github.com/Danil04ndre/crud-react-node"
            target="_blank"
            rel="noreferrer"
          >
            Repositorio <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="video">
          <video src={videoCrud} controls className="b">
            <div className=""></div>
          </video>
        </div>
      </div>
    </section>
  );
};

export default Projects;
