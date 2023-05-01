import { Pencil } from 'phosphor-react'
import Logo from '../assets/logo.svg'
import { Navigate } from './Navigate'

export function Sidebar() {
  return (
    <div 
      className="p-[1.5rem_0.75rem] md:p-[1.5rem_1.25rem] flex flex-col gap-8 items-center md:items-start"
    >
      <img className="w-8 h-8" src={Logo} alt="Logo do Twitter" />

      <Navigate />

      <button
        className="bg-blue-500 rounded-full p-4 flex justify-center w-full text-white font-black text-xl border-0 hover:bg-blue-600"
        type="button"
      >
        <Pencil className='md:hidden' />
        <span className='hidden md:block'>Tweet</span> 
      </button>
    </div>
  )
}
