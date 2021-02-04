import React from 'react'

import './style.css'

import Explorer from '../../components/explorer/Explorer'

import imagem from '../../assets/HERO-BG.png'
import logo from '../../assets/logo-airbnb.png'
import retangulo01 from '../../assets/Rectangle4.png'
import retangulo02 from '../../assets/Rectangle5.png'
import retangulo03 from '../../assets/Rectangle6.png'
import logoMaior from '../../assets/Logo_Airbnb.png'

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
            </section>
        </div>
    )
}

export default Home