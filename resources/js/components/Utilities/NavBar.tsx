import React from 'react';

export default function NavBar(){
    return(
        <div className='h-20 w-full flex p-4'>
            <div className='bg-amber-600 h-16 w-full rounded-2xl shadow-2xl flex items-center px-10'>
                <div className='h-full w-1/6 flex items-center justify-center'> 
                    <img src="/logos/white.png" alt="logo" className='h-12 w-auto object-cover'/>
                    <h1 className='text-3xl font-serif font-extrabold text-white ml-5'>Wippr</h1>  
                </div>
                <div className="h-full w-1/6 flex items-center justify-center ml-auto border">
                
                </div>
            </div>
        </div>
    );
}