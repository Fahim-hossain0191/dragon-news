'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Navlink from './Navlink';
import { authClient } from "@/lib/auth-client"
const Navbar = () => {
    const { data: session } = authClient.useSession()
    const user=session?.user;
    console.log(session)

    return (
        <div className='container mx-auto flex justify-between gap-4 mt-6'>
            <div></div>
            <ul className='flex justify-between items-center text-gray-700 gap-3'>
                <li><Navlink href={'/'}>Home</Navlink></li>
                <li><Navlink href={'/about-us'}>About</Navlink></li>
                <li><Navlink href={'/career'} className={"text-yellow-500"}>Carrer</Navlink></li>
            </ul> 
{        user?    <div className='flex items-center gap-2'>
                <h2>Hello,{user.name}</h2>
                <Image src={user.image||userAvatar} alt='User Avatar' width={60} height={60} className='rounded-full'></Image>
            
                <button className='btn bg-red-500 text-white' onClick={async()=>await authClient.signOut()}>Logout</button>
            </div>:
                <button className='btn bg-purple-500 text-white'><Link href={"/login"}>Login</Link></button>
            }
        </div>
    );
};

export default Navbar;