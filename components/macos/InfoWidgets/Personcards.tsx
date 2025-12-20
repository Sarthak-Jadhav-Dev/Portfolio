import React from 'react';
import Image from 'next/image';
//design this component as a mac ui widget

export const Personcards = () => {
    return (
        <div className='relative mt-16 mx-auto w-[90%] h-40 md:w-100 md:absolute md:top-12 md:left-8 md:mt-0 md:mx-0 bg-white/80 dark:bg-[#1e1e1e]/60 flex items-center justify-evenly rounded-2xl backdrop-blur-md border border-white/20 shadow-lg p-4 select-none '>
            <div className='bg-white/20 dark:bg-[#1e1e1e]/20 rounded-full p-2'>
                <div className='rounded-full overflow-hidden m-1'>
                    <Image src="https://avatars.githubusercontent.com/u/202232052?s=400&u=3de5df0475728c2f72b076181cf57b3a79feb0bd&v=4" alt="ProfilePhoto" width={100} height={100} />
                </div>
            </div>
            <div>
                <div>
                    <Image src="/sarthakjadhav.png" alt="Sarthak Jadhav" width={200} height={200} />
                </div>
            </div>
        </div>
    );
};