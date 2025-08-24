import React from "react";

export default function SignUpForm({ signUp } : { signUp: boolean }){
    return(
        <div className={`flex flex-col justify-center shadow-lg p-8 rounded-lg w-1/2 h-4/5 border
                        ${signUp ? 'opacity-100 scale-100 max-h-full' : 'opacity-0 scale-0 max-h-0' } transition-all duration-500`}>
            <h1 className='text-3xl font-bold text-center text-gray-800 font-serif'>
                Welcome To Wippr.
            </h1>
            <h2 className='text-xl font-sans text-center text-gray-600'>
                Lets Get Started!
            </h2>

            <div className='h-3/4 flex flex-col gap-1 mt-2'>
                {["First Name", "Last Name", "Email", "Password", "Confirm Password"].map((label, i) => (
                    <form key={i} className="w-full flex flex-col h-1/5">
                        <label className="ml-4 text-md text-gray-500 font-sans">
                            {label}
                        </label>
                        <input type={label.toLowerCase().includes("password") ? "password" : "text"} 
                        className="px-3 border rounded-md shadow-lg h-1/2 focus:outline-none"/>
                    </form>
                    )
                )}
            </div>
            
            <div className='w-full h-[10%] mt-3 flex items-center justify-center'>
                <input type="button" value="Sign Up" 
                        className='bg-amber-600 h-3/4 w-full rounded-lg text-white font-serif font-bold text-lg hover:text-black hover:bg-amber-800 transition-all cursor-pointer'/>
            </div>
        </div>            
    );
}