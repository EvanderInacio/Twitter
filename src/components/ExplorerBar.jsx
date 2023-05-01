import { MagnifyingGlass } from 'phosphor-react'
import { TrendingCard } from './TrendingCard'

export function ExplorerBar() {
  return (
    <div className="flex flex-col bg-white w-auto  px-4">
      <div className="flex flex-row bg-slate-100 rounded-full mt-2 p-3 gap-1">
        <MagnifyingGlass className='w-5 h-5 mt-1' />

        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full focus:ring-0 outline-none"
        />
      </div>
      <div className=" flex flex-col bg-slate-100 rounded-2xl my-3 h-fit">
        <p className="font-black p-3 text-lg hover:underline cursor-pointer">
          What's Happening
        </p>

        <TrendingCard category={1} topic={'Corinthians'} tweets={'55.8k'} />
        <TrendingCard category={3} topic={'Welcome to Mato'} tweets={'72.1k'} />
        <TrendingCard category={4} topic={'Imposto de Renda'} tweets={'170k'} />
        <TrendingCard category={5} topic={'Peaky Blinders'} tweets={'15.9k'} />

        <p className="font-normal text-blue-600 hover:font-semibold cursor-pointer text-lg p-3">
          Show more
        </p>
      </div>
    </div>
  )
}
