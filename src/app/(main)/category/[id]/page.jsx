import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNews } from "@/lib/data";
import React from "react";

const CategoryDetails = async ({ params }) => {
  const categories = await getCategories();
  console.log(categories);

  // console.log(news)
  const { id } = await params;
  const news = await getNews(id);
  // console.log(paramRes);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
      <div className=" col-span-3">
        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
      </div>
      <div className="   col-span-6">
        All News
        <div className="space-y-4 mt-6">
          {news.length > 0 ? (
            news.map((n) => {
              return (
                <NewsCard key={n._id}  news={n} className="p-6 rounded-md border">
                
                </NewsCard>
              );
            })
          ) : (
            <h2 className="text-center text-2xl">No News Found!</h2>
          )}
        </div>
      </div>
      <div className=" col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default CategoryDetails;
