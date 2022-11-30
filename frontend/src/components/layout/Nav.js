import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
       <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/cursos">Cursos</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/novedades">Novedades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
       </nav>
       );
}
export default Nav;