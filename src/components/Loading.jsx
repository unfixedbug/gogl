import React from 'react'
import Loader from 'react-loader-spinner'
export const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <Loader type='Puff' color='gray' height={550} width={80}/>
        </div>
    );
}
