import { MagnifyingGlass } from "phosphor-react";
import { ExplorerFeed } from "../components/ExplorerFeed";
import { TrendingCard } from "../components/TrendingCard";

export function Explorer() {
  return (
    <div className="h-screen flex flex-row">
      <div className="flex-1 flex flex-col bg-white w-2/3 px-2 overflow-scroll">
        <div className="flex flex-row bg-slate-100 rounded-full mt-2 p-3">
         <MagnifyingGlass className='w-5 h-5 mt-1' />

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full px-2 focus:ring-0 outline-none"
          />
        </div>

        <div className="border-b-2">
          <TrendingCard category={1} topic={'Corinthians'} tweets={'55.8k'} />
          <TrendingCard category={2} topic={'Duilio'} tweets={'2.8k'} />
          <TrendingCard category={3} topic={'Welcome to Mato'} tweets={'72.1k'} />
          <TrendingCard category={4} topic={'Imposto de Renda'} tweets={'170k'} />
          <TrendingCard category={5} topic={'Peaky Blinders'} tweets={'15.9k'} />
        </div>

        <ExplorerFeed />
      </div>
    </div>
  )
}
