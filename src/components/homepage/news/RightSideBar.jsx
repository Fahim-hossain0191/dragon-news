'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGoogle,FaGithub } from "react-icons/fa";
const RightSideBar = () => {
    const handleGoogleSignin=async()=>{
         const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log("Google sign in",data)
    }

    const handleGithubSignin=async()=>{
         const data = await authClient.signIn.social({
    provider: "github",
  });
  console.log("Google sign in",data)
    }
    return (
        <div>
            <h2>Login with</h2>
            <div className='flex flex-col gap-2'>

            <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignin}><FaGoogle ></FaGoogle>Login with google</button>
            <button className='btn' onClick={handleGithubSignin} > <FaGithub />Login with github</button>
            </div>
        </div>
    );
};

export default RightSideBar;