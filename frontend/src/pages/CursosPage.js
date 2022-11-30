import React from 'react';
import '../styles/components/pages/CursosPage.css';

const CursosPage = (props) => {
    return (
        <main className="holder">
        <h2>Cursos</h2>
        <p>Nuestros cursos de música en línea de 12 semanas son creados e impartidos por expertos de la industria y los
            mismos instructores de renombre.
            Aprenda todos los fundamentos de musicales, cubriendo aspectos de producción, composición, síntesis,
            muestreo, procesamiento de efectos y más.</p>
        <div className="curso">
            <img src="images/c_guitar.jpg" alt="Clases de Guitarra" />
            <div className="info">
                <h4>Clases de Guitarra</h4>
                <p>Explore la guitarra de blues acústico, desde tocar melodías con los dedos hasta tocar solos sobre
                    patrones de bajo independientes, hasta tocar en el estilo slide de cuello de botella acústico.
                </p>
            </div>
        </div>
        <div className="curso">
            <img src="images/c_drums.jpg" alt="Clases de Bateria" />
            <div className="info">
                <h4>Clases de Bateria</h4>
                <p>Fortalezca su versatilidad general como baterista aprendiendo los ricos ritmos y los conceptos
                    rítmicos de la música afrocubana.</p>
            </div>
        </div>
        <div className="curso">
            <img src="images/c_piano.jpg" alt="Clases de Piano" />
            <div className="info">
                <h4>Clases de Piano</h4>
                <p>En Advanced Jazz Piano, podrá analizar, reinventar curiosamente e interpretar canciones en los
                    estilos avanzados de piano de jazz que se tratan en este curso. Se pondrá un énfasis especial en los
                    aspectos de la interpretación de piano solo, la interpretación en grupo, las voces de los acordes,
                    la creación de líneas, la independencia de la mano izquierda/mano derecha y la influencia afrolatina
                    en la improvisación del jazz.</p>
            </div>
        </div>
    </main>
    );
}
export default CursosPage;