import React from 'react';
import NavBar from '../components/Utilities/NavBar';

export default function Landing() {
    return (
        <div className="bg-white h-[200vh] w-screen flex flex-col">
            <div className= 'z-0 h-1/4 shadow-inner relative bg-center w-full flex flex-col bg-[url("/images/wippr-backdrop.jpg")] bg-cover'>
                <div className='absolute inset-0 bg-black opacity-60'></div>
                <div className='z-10 h-3/16 w-full flex items-center mt-4 px-4'>
                    <div className='h-full w-1/6 flex items-center justify-center'>
                        <img src="/logos/white.png" alt="logo" className='object-cover h-full w-auto' />
                        <h1 className='text-3xl font-extrabold text-left text-white font-serif'>
                            Wippr.       
                        </h1>
                    </div>
                    <div className='h-full w-3/6 ml-auto flex items-center justify-center'>
                        <nav className='w-full h-full flex items-center justify-around'>
                            <a href=""
                            className='text-2xl text-white font-bold transition hover:text-amber-600'>Home</a>
                            <a href="" 
                            className='text-2xl text-white font-bold transition hover:text-amber-600'>About Us</a>
                            <a href=""
                            className='text-2xl text-white font-bold transition hover:text-amber-600'>Contact Us</a>
                            <button className='border-2 font-serif border-amber-600 bg-amber-600 text-white text-2xl font-bold rounded-xl px-5 py-2 cursor-pointer
                                             hover:bg-white hover:text-amber-600 hover:border-2 hover:border-amber-600 transition duration-300 ease-in-out'>
                                Sign Up
                            </button>
                        </nav>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-17">
                    <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="w-full h-[150px]"
                    >
                    <path
                        d="M-0.00,49.98 C149.99,150.00 349.82,-50.00 500.00,49.98 L500.00,150.00 L-0.00,150.00 Z"
                        className="fill-white"
                    ></path>
                    </svg>
                </div>
                <div className='z-10 mt-auto font-extrabold font-serif h-2/5 w-full px-30 flex items-center'>
                    <h1 className='text-8xl text-white -translate-y-5'>Welcome to Wippr.</h1>
                </div>
            </div>
            <div className='h-11/16  w-full flex flex-col'>

            </div>
        </div>
    );
}   