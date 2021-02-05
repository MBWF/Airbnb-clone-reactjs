import React from 'react'

import './style.css'

import Explorer from '../../components/explorer/Explorer'
import Aventures from '../../components/aventures/Aventures'

import imagem from '../../assets/HERO-BG.png'
import logo from '../../assets/logo-airbnb.png'
import retangulo01 from '../../assets/Rectangle4.png'
import retangulo02 from '../../assets/Rectangle5.png'
import retangulo03 from '../../assets/Rectangle6.png'
import logoMaior from '../../assets/Logo_Airbnb.png'
import imageBox from '../../assets/imageBox.png'
import imageBox02 from '../../assets/imageBox02.png'
import imageBox03 from '../../assets/imageBox03.png'
import imageBox04 from '../../assets/imageBox04.png'
import imageBox05 from '../../assets/imageBox05.png'


function Home() {
    return (
        <div id="Home-Page">
            <header>
            <nav>
                <img src={logo} />
            
                <ul>
                    <li>Português</li>
                    <li>RealR$</li>
                    <li>Seja Anfitrião</li>
                    <li>Crie sua experiência</li>
                    <li>Ajuda</li>
                    <li>Cadastro</li>
                    <li>Login</li>
                </ul>
            </nav>

                <div className='search-form'>
                    <h1>Reserve acomodações e atividades exclusivas.</h1>
                    <label>Cidade</label><br/>
                    <input placeholder='Cidade'/><br/>

                    <div className='check-in-out'>
                        <div className='column'>
                            <label>Check-in</label>
                            <input placeholder='dd/mm/aa'/>
                        </div>
                        <div className='column'>
                            <label>Check-out</label>
                            <input placeholder='dd/mm/aa'/>
                        </div>
                    </div>

                    <label>Pessoas</label><br/>
                    <input placeholder='Pessoas'/><br/>

                    <button>Procurar</button>
                </div>
            </header>
            <section>
                <div className='explore'>
                    <h1>Explore Lugares</h1>
                    <div className='explore-org'>
                        <Explorer image={retangulo01} name='Logements' />
                        <Explorer image={retangulo02} name='Experience' />
                        <Explorer image={retangulo03} name='Aventures' />
                    </div>
                </div>
                <div className='discovery'>
                    <h1>Descobrir Acomodações</h1>
                    <h3>Uma seleção de acomodação verificada de acordo com critérios de qualidade e design</h3>
                    <div className='discovery-centralize'>
                        <div className='discovery-img'>
                            <div className='discovery-img-centralize'>
                                <img src={logoMaior} />
                                <button>Descubra Acomodações</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='aventures'>
                    <h1>Descubra as aventuras do Airbnb</h1>
                    <h3>Viagens de vários dias organizadas por especialistas locais com atividades, refeições e alojamento incluídos</h3>
                    <div className='aventures-card-box' >
                        <Aventures imageBox={imageBox} pais='Brasil' pacote='2 Nights PACKAGE All Inclusive' preco='A partir de 577 € / pessoa - 3 dias' rate='5.0' />
                        <Aventures imageBox={imageBox02} pais='Uruguai' pacote='9 Nights PACKAGE Exclusive' preco='A partir de 300 € / pessoa - 9 dias' rate='4.8' />
                        <Aventures imageBox={imageBox03} pais='Peru' pacote='5 Nights PACKAGE All Inclusive' preco='A partir de 700 € / pessoa - 5 dias' rate='3.7' />
                        <Aventures imageBox={imageBox04} pais='Suiça' pacote='3 Days PACKAGE Inclusive' preco='A partir de 900 € / pessoa - 3 dias' rate='5.0' />
                        <Aventures imageBox={imageBox05} pais='Noruega' pacote='2 Nights PACKAGE All Inclusive' preco='A partir de 550 € / pessoa - 2 dias' rate='4.5' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home