'use client'

import { Files, Shield, Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React, { useState, useContext } from 'react';
import StateHandler from '../context/stateHandler';
import Footer from '../../_components/Footer'

const SideNav = () => {
    const [activeIndex, setActiveIndex] = useState();
    const { open, setOpen } = useContext(StateHandler);
    let router = useRouter()

    const menuList = [
        {
            id: 1,
            name: 'Upload',
            icon: Upload,
            path: '/upload',
            bgColor: 'bg-violet-500' 

        },
        {
            id: 2,
            name: 'Files',
            icon: Files,
            path: '/files',
            bgColor: 'bg-violet-500' 
        },
    ];

    return (
        <div className='bg-black relative shadow-sm border-r h-full'>
            <div className='p-5 border-b'>
                <Image src={'/FG.png'} width={100} height={100} alt='' />
            </div>

            <div className='flex flex-col float-left w-full'>
                {menuList.map((item, index) => (
                    <button key={index} className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full 
                    ${activeIndex === index ? 'bg-black text-violet-500' : 'text-violet-700'}`}
                        onClick={() => {
                            setActiveIndex(index);
                            router.push(item.path);
                            setOpen(false);
                        }}>
                        <item.icon />
                        <h2>{item.name}</h2>
                    </button>
                ))}
            </div>

            <button className='absolute bottom-20 flex p-4 px-6
              w-full bg-gray-100 active:bg-blue-50  text-gray-700
              text-xl items-center justify-center font-semibold
              lg:hidden cursor-pointer'
                onClick={() => setOpen(false)}>
                Close
            </button>

            <Footer />

        </div>
    )
}

export default SideNav;