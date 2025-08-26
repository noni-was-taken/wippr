import React from 'react';
import NavBar from '../components/Utilities/NavBar';

export default function Landing() {
    return (
        <div className="bg-white h-screen w-screen flex flex-col">
            <div className= 'h-2/3 shadow-inner w-full flex flex-col'>
                <div className='h-3/16 w-full flex items-center mt-4 px-4'>
                    <div className='h-full w-1/6 flex items-center justify-center'>
                        <img src="/logos/colored.png" alt="logo" className='object-cover h-full w-auto' />
                        <h1 className='text-3xl font-extrabold text-left text-amber-600 font-serif'>
                            Wippr.       
                        </h1>
                    </div>
                    <div className='h-full w-3/6 ml-auto flex items-center justify-center'>
                        <nav className='w-full h-full flex items-center justify-around'>
                            <a href=""
                            className='text-2xl font-bold'>Home</a>
                            <a href="" 
                            className='text-2xl font-bold'>About Us</a>
                            <a href=""
                            className='text-2xl font-bold'>Contact Us</a>
                            <button className='border-2 font-serif border-amber-600 bg-amber-600 text-white text-2xl font-bold rounded-xl px-5 py-2 cursor-pointer
                                             hover:bg-white hover:text-amber-600 hover:border-2 hover:border-amber-600'>
                                Sign Up
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='h-11/16  w-full flex flex-col bg-amber-600'>

            </div>
        </div>
    );
}   