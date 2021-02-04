import React from 'react'

import './style.css'

function Home() {
    return (
        <div id="Home-Page">
            <header>
            <nav>
                <div className='logo-image' />
            
                <ul>
                    <li>Português</li>
                    <li>RealR$</li>
                    <li>Seja Anfitrião</li>
                    <li>Crie sua experiência</li>
                    <li>Socorro</li>
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
        </div>
    )
}

export default Home