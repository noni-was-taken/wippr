import React from "react";

export default function LoginForm({ signUp }:{signUp : boolean}){
    return(
        <div className={`flex flex-col justify-center items-center shadow-lg p-8 rounded-lg w-1/2 h-2/5 border bg-white 
                        ${signUp ? 'opacity-0 scale-0 max-h-0' : 'opacity-100 scale-100 max-h-96'} transition-all duration-500`}>
            <h1 className='text-3xl font-bold text-center text-gray-800 font-serif'>
                Welcome Back!
            </h1>
            <h2 className='text-xl font-sans text-center text-gray-600'>
                We missed you.
            </h2>
            <div className='h-3/4 w-full flex flex-col gap-1 mt-2'>
                <form action="" className='w-full flex flex-col h-1/2'>
                    <label htmlFor="" className='ml-4 text-md text-gray-500 font-sans'>Email</label>
                    <input type="text" name="" id="" className='px-3 border rounded-md shadow-lg h-1/2 focus:outline-none'/>
                </form>
                <form action="" className='w-full flex flex-col h-1/2'>
                    <label htmlFor="" className='ml-4 text-md text-gray-500 font-sans'>Password</label>
                    <input type="password" name="" id="" className='px-3 border rounded-md shadow-lg h-1/2 focus:outline-none'/>
                </form>
            </div>
            <div className='w-full h-1/5 mt-3 flex items-center justify-center'>
                <input type="button" value="Log In" 
                        className='bg-amber-600 h-full w-full rounded-lg text-white font-serif font-bold text-lg hover:text-black hover:bg-amber-800 transition-all cursor-pointer'/> 
            </div>
        </div>
    );
}



