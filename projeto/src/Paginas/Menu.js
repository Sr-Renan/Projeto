import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Historia from './Historia';
import Contatos from './Contatos';
import './Menu.css';
import Footer from '../Components/Footer';
import Leao from '../Img/Leao.png';

function Menu(){


    return (
        <> 
        
            <BrowserRouter>

                <header>
                <img src={Leao} alt="Imagem Logo do Site" className="Logo"></img>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/Historia/">Historia</Link>
                            </li>

                            <li>
                                <Link to="/Contatos/">Contatos</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
    
                <menu>
                <div className="cont">
                    <Route path="/" exact component={Home} />

                    <Route path="/Historia/" component={Historia}/>

                    <Route path="/Contatos/" component={Contatos}/>
                </div>
                </menu>
    
                <Footer></Footer>

             </BrowserRouter>
        
        </>
    );

}

export default Menu;