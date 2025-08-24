import React, { useState } from 'react';

export default function Login({ test }: { test?: string }) {
    const [signUp, setLogin] = useState(true);

    return (
        <div className="bg-black h-screen w-screen flex items-center ">
            <div className={ `bg-white h-full flex items-center justify-center transition-all
                            ${signUp ? 'w-2/3' : 'w-1/3'}`}>
                <div className={`flex flex-col justify-center items center 
                                ${signUp ? 'shadow-lg p-8 rounded-lg w-1/2 h-4/5 border' : 'hidden'}`}>
                    <h1 className='text-3xl font-bold text-center text-gray-800 font-serif'>
                        Welcome To Wippr.
                    </h1>
                    <h2 className='text-xl font-sans text-center text-gray-600'>
                        Lets Get Started!
                    </h2>
                    <div className='h-3/4 flex flex-col gap-1 mt-2'>
                        <form action="" className='w-full flex flex-col h-1/5'>
                            <label htmlFor="" className='ml-4 text-md text-gray-500 font-sans'>First Name</label>
                            <input type="text" name="" id="" className='px-3 border rounded-md shadow-lg h-2/3 focus:outline-none'/>
                        </form>
                        <form action="" className='w-full flex flex-col h-1/5'>
                            <label htmlFor="" className='ml-4 text-md text-gray-500 font-sans'>Last Name</label>
                            <input type="text" name="" id="" className='px-3 border rounded-md shadow-lg h-2/3 focus:outline-none'/>
                        </form>
                        <form action="" className='w-full flex flex-col h-1/5'>
                            <label htmlFor="" className='ml-4 text-md text-gray-500 font-sans'>Email</label>
                            <input type="text" name="" id="" className='px-3 border rounded-md shadow-lg h-2/3 focus:outline-none'/>
                        </form>
                        <form action="" className='w-full flex flex-col h-1/5'>
                            <label htmlFor="" className='ml-4 text-md text-gray-500 font-sans'>Password</label>
                            <input type="text" name="" id="" className='px-3 border rounded-md shadow-lg h-2/3 focus:outline-none'/>
                        </form>
                        <form action="" className='w-full flex flex-col h-1/5'>
                            <label htmlFor="" className='ml-4 text-md text-gray-500 font-sans'>Confirm Password</label>
                            <input type="text" name="" id="" className='px-3 border rounded-md shadow-lg h-2/3 focus:outline-none'/>
                        </form>
                    </div>
                    <div className='w-full h-1/10 mt-3 flex items-center justify-center'>
                        <input type="button" value="Sign Up" 
                               className='bg-amber-600 h-3/4 w-full rounded-lg text-white font-serif font-bold text-lg hover:text-black hover:bg-amber-800 transition-all cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className='bg-amber-600 h-full w-1/3 flex flex-col items-center justify-center'>
                <div className='w-4/5 h-1/2 flex flex-col justify-center gap-5'>
                    <h1 className='text-3xl font-bold text-center text-white font-serif'>
                        Already Have An Account?
                    </h1>
                    <div className='w-full flex justify-center'>
                        <input
                        onClick={() => setLogin(false)} 
                        type="button" 
                        value="Log In" 
                        className='h-13 w-1/3 flex bg-white shadow-xl rounded-xl text-xl cursor-pointer 
                        hover:bg-amber-600 hover:text-white hover:font-bold hover:border-white hover:border-3'
                        />
                    </div>     
                </div>
            </div>  
        </div>
    );
}
