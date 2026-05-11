import Marquee from "react-fast-marquee";
const news=[
    {
        id:"1",
        title:"Breaking News: Major Event Unfold in the City"
    },
    {
        id:"2",
        title:"Breaking News: New Policy Announced by the Government"
    },
    {
        id:"3",
        title:"Breaking News: New Policy Announced by the Government"
    }
]
const BreakingNews = () => {
    return (
        <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-2  container mx-auto">
            <button className="btn bg-red-500 text-white">Latest News</button>
            <Marquee pauseOnHover={true}>
               {
                news.map(n=><span key={n.id}>{n.title}</span>)
               }
            </Marquee>
        </div>
    );
};

export default BreakingNews;