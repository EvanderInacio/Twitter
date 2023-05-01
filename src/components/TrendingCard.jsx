
export function TrendingCard({ category, topic, tweets}) {
  return (
    <div className="flex flex-col p-3 hover:bg-slate-300 cursor-pointer">
      <p className="flex flex-row text-md text-slate-500 justify-between">
        {category}.Trending
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </p>
      <p className="text-xl text-black font-bold">#{topic}</p>
      <p className="text-md text-slate-500">{tweets} tweets</p>
    </div>
  )
}
