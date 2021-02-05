import React from 'react';

import './Aventures.css';
import star from '../../assets/star.png'

function Aventures({ imageBox, pais, pacote, preco, rate }) {
  return (
    <div className='card-box'>
        <div className='box-img' >
            <img src={imageBox} alt='imagem'/>
        </div>
        
        <div className='box-description' >
            <h2>{pais}</h2>
            <h1>{pacote}</h1>
            <h3>{preco}</h3>
            <div className='rate'> 
                <h2>{rate}</h2>
                <img src={star} className='star-rate' />
            </div>
        </div>

    </div>

  ) 
}

export default Aventures;