import React from 'react';
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Establecida en 2002, la misión de A&R es brindar acceso a programas accesibles y de alta calidad a
                    aspirantes a músicos y artistas de todo el mundo, estableciendo el estándar para la educación musical de
                    calidad en línea. Ademas, contamos con una tienda on.line donde los usuarios puedenacceder a las mejores
                    marcas del mercado...</p>
                <p>Nuestros instructores son expertos reconocidos en sus respectivos campos: han producido y diseñado
                    cientos de artistas y numerosos proyectos galardonados, y el trabajo de sus alumnos ha obtenido
                    nominaciones a los premios Grammy.</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="images/perfilM.PNG" alt="Noa"/>
                        <h5>Noa</h5>
                        <h6>Gerente General</h6>
                        <p>Cofundadora de A&R en 2002 y ha sido fundamental en la transformación de la escuela en línea
                            en una potencia mundial en educación musical. Su dedicación a la educación musical también se
                            refleja en los más de 100 libros y arreglos sobre métodos de educación musical que ha escrito
                            para Carl Fischer, First Act, Alfred Publishing y Warner Bros.</p>
                    </div>
                    <div className="persona">
                        <img src="images/perfilH.PNG" alt="Donatto"/>
                        <h5>Donatto</h5>
                        <h6>Musico</h6>
                        <p>Es un multiinstrumentista, compositor y orquestador para las industrias del cine, la televisión y
                            la publicidad, y el director creativo y socio gerente de Canzion Studios.</p>
                    </div>
                    <div className="persona">
                        <img src="images/perfilM.PNG" alt="Ainelen"/>
                        <h5>Ainelen</h5>
                        <h6>Fundadora</h6>
                        <p>Licenciada en educacion musical, especializada en bateria. ha trabajado en casi todos los
                            aspectos de la industria musical, desde interpretación, negocios, composición y educación hasta
                            tecnología y producción. Su filosofía educativa y administrativa es que quiere que los
                            estudiantes puedan tener la libertad de explorar y sentirse inspirados.</p>
                    </div>
                    <div className="persona">
                        <img src="images/perfilH.PNG" alt="Ruben"/>
                        <h5>Ruben</h5>
                        <h6>Profesor</h6>
                        <p>Compositor activo de cine y televisión, tiene varios créditos de composición de cine y televisión
                            a su nombre, ha trabajado en casi todos los aspectos de la industria de la música, desde interpretación,
                            negocios, composición y educación hasta tecnología y producción. Su filosofía educativa y
                            administrativa es que quiere que los estudiantes puedan tener la libertad de explorar y sentirse
                            inspirados. Lo que es más importante, quiere que los estudiantes se vayan con la sensación de
                            que lo que han aprendido es un conocimiento y habilidades relevantes y basados ​​en el mundo
                            real que pueden aplicar de inmediato, templados con un espíritu emprendedor y la mentalidad de
                            seguir aprendiendo y adaptándose a lo largo de su vida.</p>
                    </div>
                </div>
            </div>
    </main>
    );
}
export default NosotrosPage;