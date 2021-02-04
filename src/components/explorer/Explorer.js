import React from 'react';

import './Explorer.css';

function Explorer({image, name}) {
  return (
    <div className='explorer-body' >
        <img src={image} className='explorer-img'></img>

        <div className='explorer-description'>
            <h1>{name}</h1>
        </div>
    </div>
  )
}

export default Explorer;