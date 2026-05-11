'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Children } from 'react';

const Navlink = ({href,children,className}) => {
    const pathname=usePathname();
   const isActive=href===pathname
    return (
        <Link href={href} className={`${isActive?"border-b-2 border-b-purple-500":""}${className}`}>{children}</Link>
    );
};

export default Navlink;