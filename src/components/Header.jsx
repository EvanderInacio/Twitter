import { Sparkle } from 'phosphor-react'

export function Header({ title }) {
  return (
    <div 
      className="py-6 px-5 flex items-center justify-between text-xl font-bold border-b-[1px] border-zinc-400"
    >
      {title}
      <Sparkle className="w-6 h-6" />
    </div>
  )
}
