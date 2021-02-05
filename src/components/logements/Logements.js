import React from 'react';

import'./Logements.css';
import starRed from '../../assets/starRed.png'

function Logements({logImageBox, place, rate, price}) {
  return (
        <div className='logements-cards'>
            <img src={logImageBox} />
            <div className='logements-description'>
                <div className='logements-inside' >
                    <div className='superhost'>SUPERHOST</div>
                    <div>{place}</div>
                </div>
            <div>
                <div className='logements-rate'>
                    <img src={starRed} />
                    <h2>{rate}</h2>
                </div>
            </div>
          </div>

          <h3>{price}</h3>
      </div>
  );
}

export default Logements;