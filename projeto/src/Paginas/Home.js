import React from 'react';
import './Home.css';
import Img1 from '../Img/Img1.jpg';

function Home(){


    return (
    <>
        <h1>Grupo de Tecnologia Global</h1>

        <div className="Home">
            <img src={Img1} alt="Imagem de tecnoligias" className="Tech"></img>
        </div>
        
        

    </>
    );
}

export default Home;