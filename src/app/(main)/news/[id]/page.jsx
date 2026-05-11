import { getNewsBYId } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

export const generateMetadata=async({params})=>{
      const {id}=await params;
      const news=await getNewsBYId(id);
        return {
    title: news.title,
    description: news.details,
  }
}

const NewsDetailsPage =async ({params}) => {
    const {id}=await params
    const news=await getNewsBYId(id);
    return (
        <div className='max-w-4xl mx-auto my-8 '>
          <div className="card bg-base-100 shadow-sm">
               <div className="card-body">
                 <div>
                   <div className="flex gap-1 items-center bg-slate-200 p-4">
                     <Image
                       src={news.author?.img}
                       alt={news.author?.name}
                       height={40}
                       width={40}
                       className="rounded-full"
                     ></Image>
                   </div>
                   <div>
                     <h2 className="font-semibold">{news.author?.name}</h2>
                     <p className="text-xs">{news.author?.published_date}</p>
                   </div>
                 </div>
                 <h2 className="card-title">{news.title}</h2>
                
                    <figure>
                 <Image
               src={news.image_url}
               alt={news.title} width={300} height={300}   className="w-full"/>
              
               </figure>
               <p className="">{news.details}</p>
         
               <div className="flex items-center justify-between ">
                 <div className="flex items-center gap-2">
                       <h2 className="flex items-center gap-2">
                            <CiStar />
                        {news.rating.number}
                       </h2>
                       <h2 className="flex items-center gap-2">
                        <FaEye />
                        {news.total_view}
                       </h2>
                 </div>
                 <Link href={`/category/${news.category_id}`}>
                 
                 <button className="btn btn-primary cursor-pointer">See related new<FaArrowRight /></button>
                 </Link>
               </div>
               </div>
            
             </div>
            NewsDetailsPage
        </div>
    );
};

export default NewsDetailsPage;