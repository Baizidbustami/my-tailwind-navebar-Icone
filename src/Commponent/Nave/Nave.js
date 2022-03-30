import React from 'react';

const Nave = (props) => {
    const {name, link}=props.rout
    return (
        
          <li className='px-3 py-5'>
          <a href={link}>{name}</a>
          </li>
        
    );
};

export default Nave;