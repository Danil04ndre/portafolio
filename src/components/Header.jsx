import '../css/Header.css'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <header className='header'>
        <nav className='nav'> 
            <div className="logo">
                  <img src={logo} alt="" />
            </div>
            <div className="theme">
            <i className="fa-solid fa-sun"></i>
            </div>
            <div className="links">
                <a href=""></a>
                <a href="">INICIO</a>
                <a href="">SOBRE MI</a>
                <a href="">HABILIDADES</a>
                <a href="">PROYECTOS</a>
                <a href="">CONTACTO</a>
            </div>
        </nav>
    </header>
  )
}

export default Header