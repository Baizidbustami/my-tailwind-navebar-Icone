
import React from 'react';

import Detils from './Detils/Detils';


const Cart = () => {
    const cartInformation=[
        {name:'Free', id:1, price:'0', benefits:[
            'lifetime', 
            'unlimetited deals',
            'localized defaults', 
            'fantastic deals', 
            'crazy deals'
        ]},
        {name:'Regular', id:2, price:9.99, benefits:[
            'everything on free', 
            'unilmeted deals', 
            'fantastic deals', 
            'crazy deals'
        ]},
        {name:'Premium', id:3, price:19.99, benefits:[
            'everything on free', 
            'unilmeted deals', 
            'fantastic deals', 
            'crazy deals'
        ]}
        
    ];  
    return (
        <div className='bg-sky-500 p-4'>
            <h1 className='text-5xl text-center font-serif'>Best Deals of the Town</h1>
            <p className='p-4 text-xl font-serif'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus corrupti mollitia aliquam voluptatibus modi veritatis maxime. Quos ipsum qui in?</p>
            <div className='grid md:grid-cols-3 gap-4 mx-10'>
                {
                cartInformation.map(data=><Detils data={data}></Detils>)
                
              }
            
            </div>
           .
        </div>
    );
    
};

export default Cart;