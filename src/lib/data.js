export const getCategories=async()=>{
   const res=await fetch("http://openapi.programming-hero.com/api/news/categories")
   const data=await res.json();
   return data.data;
}
export const getNews=async(category_id)=>{
   const res=await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
   const data=await res.json();
   return data.data;
}
export const getNewsBYId=async(news_id)=>{
   const res=await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
   const data=await res.json();
   return data.data[0];
}