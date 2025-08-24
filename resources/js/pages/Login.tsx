import { flushCompileCache } from 'module';
import React, {useState} from "react";
import SignUpForm from "../components/Forms/SignUp";
import LoginForm from "../components/Forms/Login";


export default function Login({ test }: { test?: string }) {
    const [signUp, setLogin] = useState(false);
    
        return(
            <div className="bg-black h-screen w-screen flex items-center ">
                <div className={ `bg-white h-full flex flex-col items-center justify-center transition-all
                                ${signUp ? 'w-2/3' : 'w-1/3'}`}>
                    <SignUpForm signUp={signUp}/>
                    <div className={`w-4/5 h-1/2 flex flex-col justify-center items-center gap-5 
                            ${signUp ? 'opacity-0 scale-0 max-h-0' : 'opacity-100 scale-100 max-h-96'} transition-all duration-500`}>
                        {/* <img src="/images/ver-logo.png" alt="logo" className='h-1/2 w-auto  object-cover'/> */}
                        <h1 className='text-3xl font-bold text-center text-amber-600 font-serif'>
                            Don't Have an Account?
                        </h1>
                        <div className='w-full flex justify-center'>
                            <input
                            onClick={() => setLogin(true)} 
                            type="button" 
                            value="Sign Up" 
                            className='h-13 w-1/3 flex bg-amber-600 shadow-xl rounded-xl text-xl cursor-pointer text-white
                            hover:bg-white hover:text-black hover:font-bold hover:border-amber-600 hover:border-3'
                            />
                        </div>     
                    </div>
                </div>
                <div className={`bg-amber-600 h-full flex flex-col items-center justify-center transition-all
                                ${signUp ? 'w-1/3' : 'w-2/3'}
                `}>
                    <LoginForm signUp={signUp}/>
                    <div className={`w-4/5 h-1/2 flex flex-col justify-center items-center gap-5 
                        ${signUp ? 'opacity-100 scale-100 max-h-96' : 'opacity-0 scale-0 max-h-0' } transition-all duration-500`}>
                        {/* <img src="/images/ver-logo.png" alt="logo" className='h-1/2 w-auto  object-cover'/> */}
                        <h1 className='text-3xl font-bold text-center text-white font-serif'>
                            Already Have an Account?
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