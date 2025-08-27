import react from 'react'; 
import {BookDown, MonitorDown, ImageDown} from 'lucide-react';
import {motion} from 'motion/react';

export default function AboutUs() {
    return (
        <div className='h-full mt-15 w-full flex flex-col justify-center items-center'>
            <div className='h-full w-4/5 flex flex-col item-center p-3'>
                <div className='w-full 1-4 flex items-center justify-center gap-5'>
                <h1 className='text-center text-5xl font-extrabold'>What Is</h1> <h1 className='font-serif text-5xl font-bold text-amber-600'> Wippr?</h1>
                </div>
                <div className='w-full h-3/4 flex mt-auto items-center justify-evenly'>
                    <motion.div className='h-full w-1/4 py-3 flex  flex-col items-center'
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.3, ease: 'easeInOut'}}
                        >
                        <BookDown className='h-1/4 w-auto text-amber-600'/>
                        <h1 className='mt-4 font-serif font-bold text-3xl'>
                            Interact
                        </h1>
                        <p className='mt-2 text-xl text-center'>
                            Engage with a community of like-minded individuals passionate about knowledge sharing and intellectual growth.
                        </p>
                    </motion.div>
                    <motion.div className='h-full w-1/4 py-3 flex  flex-col items-center'
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.3, ease: 'easeInOut'}}
                        >
                        <MonitorDown className='h-1/4 w-auto text-amber-600'/>
                        <h1 className='mt-4 font-serif font-bold text-3xl'>
                            Debate
                        </h1>
                        <p className='mt-2 text-xl text-center'>
                            Participate in thought-provoking discussions and debates on a wide range of topics, from science and technology to philosophy and culture.
                        </p>
                    </motion.div>
                    <motion.div className='h-full w-1/4 py-3 flex  flex-col items-center'
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.3, ease: 'easeInOut'}}
                        >
                        <ImageDown className='h-1/4 w-auto text-amber-600'/>
                        <h1 className='mt-4 font-serif font-bold text-3xl'>
                            Learn
                        </h1>
                        <p className='mt-2 text-xl text-center'>
                            Access a wealth of resources, articles, and multimedia content to expand your knowledge and stay informed about the latest developments in various fields.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}