import React from 'react';
import { CheckCircleIcon} from '@heroicons/react/solid'
const Benefit = (props) => {
    
    
    return (
        <div className='flex items-center text-xl'>
            <CheckCircleIcon className="h-5 w-5 text-blue-500"/>
      <p></p>
            <p className='pl-2 font-serif text-xl'>{props.bane}</p>
        </div>
    );
};

export default Benefit;