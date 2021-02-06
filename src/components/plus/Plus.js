import React from 'react';

import './Plus.css'
import logo from '../../assets/logo-airbnb.png'

function Plus({img, description, preco}) {
  return (
      <div className='plus-card'>
          <div style={{backgroundImage: `url(${img})`}} className='plus-img'>
            <img src={logo} />
          </div>

        <h1>{description}</h1>
        <h2>{preco}</h2>

      </div>
  )
}

export default Plus;