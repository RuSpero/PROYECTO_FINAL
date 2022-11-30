import React from 'react';
import '../styles/components/pages/HomePage.css';


const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="imagenInicio">
                <img src="images/m_mixed7-20.jpg" alt="guitarra"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Fundada en 2001, A&R es el principal innovador y el mayor proveedor de educación musical en todo el
                        mundo, y ofrece a más de 75000 estudiantes de 164 países el renombrado plan de estudio. Los
                        estudiantes reciben instrucción musical experta y emergen con las habilidades para superar las
                        demandas de la industria musical.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Muy buen ambiente de estudio</span>
                        <span className="autor">Felipe - Alumno</span>
                    </div>
                </div>
            </div>
        </main>);
}
export default HomePage;