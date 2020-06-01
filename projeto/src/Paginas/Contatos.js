import React from 'react';
import './Contatos.css';
import Contatos1 from '../Img/Contatos1.jpg';
import Contatos2 from '../Img/Contatos2.jpg';

function Contatos(){

    return (
    <>
        <h1>Nosso Contatos</h1>

        <div className="Cont">
            <img src={Contatos1} alt="Imagem de Contatos" className="Contatos1"></img><br></br>
            <img src={Contatos2} alt="Imagem de Contatos" className="Contatos"></img>
        </div>
    </>
    ); 

    

}

export default Contatos;