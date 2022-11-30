import React from 'react';
import '../styles/components/pages/ProductosPage.css';

const ProductosPage = (props) => {
    return (
        <main className="holder">
        <div className="catalogo">
                <div className="producto">
                    <img src="images/glespaul.PNG" alt="Gibson Les Paul" />
                    <p>Gibson Les Paul Junior Usa Negra Con Estuche</p>
                </div>
                <div className="producto">
                    <img src="images/ftelecaster.PNG" alt="Fender Telecaster" />
                    <p>Fender American Vintage '52 Telecaster</p>
                </div>
                <div className="producto">
                    <img src="images/fstrato.PNG" alt="Fender Stratocaster" />
                    <p>Fender Stratocaster</p>
                </div>
                <div className="producto">
                    <img src="images/ksint.PNG" alt="Korg Microkorg Mk1" />
                    <p>Sintetizador Analógico Korg Microkorg Mk1</p>
                </div>
                <div className="producto">
                    <img src="images/apsint.PNG" alt="Arturia Polybrute Sintetizador" />
                    <p>Teclado Sintetizador Analogico Arturia Polybrute</p>
                </div>
                <div className="producto">
                    <img src="images/pbat.PNG" alt="Pearl Bateria" />
                    <p>Bateria Pearl Decade Maple Bombo 22 Satin Brown Burst</p>
                </div>
                <div className="producto">
                    <img src="images/ybatelec.PNG" alt="Yamaha Dtx452k" />
                    <p>Batería Eléctrica Yamaha Dtx452k</p>
                </div>
                <div className="producto">
                    <img src="images/zplat.PNG" alt="Zildjian K" />
                    <p>Zildjian K Sweet Set Platillos</p>
                </div>
        </div>
    </main>);
}
export default ProductosPage;