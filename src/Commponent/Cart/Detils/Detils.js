import React from 'react';
import Benefit from './Benefit';



const Detils = (props) => {
    const {name, price, benefits}=props.data
    return (
        <div className='bg-white h-72 rounded-2xl'>
            <div className='pt-4'>
            <h1 className='text-2xl font-serif text-center bg-sky-500 mx-14 p-2 rounded-2xl'>{name}</h1>
            <p className='text-2xl font-serif text-center'>{price}</p>
          <div className='ml-10'>
              <h1 className='text-2xl font-serif'>Benefits :</h1>
              {
                benefits.map(bane=><Benefit  bane={bane}></Benefit>)
              }
          </div>
            </div>
        </div>
    );
};

export default Detils;