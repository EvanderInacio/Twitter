import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";

export function Tweet({ content }) {
  return (
    <Link to="/status" className="py-6 px-5 grid grid-cols-[3rem_1fr] gap-3 border-b-[1px] border-zinc-400">
      <img
        className="w-12 h-12 rounded-full"
        src="https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg"
        alt="Foto de perfil"
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <strong>Cacto</strong>
          <span className="text-sm text-slate-400">@cacto123</span>
        </div>

        <p>{content}</p>

        <div className="flex items-center gap-12 mt-3">
          <button className="flex items-center gap-2 text-sm text-slate-600"> 
            <ChatCircle className="w-5 h-5"/> 20
          </button>
          <button className="flex items-center gap-2 text-sm text-slate-600">
            <ArrowsClockwise className="w-5 h-5"/> 3
          </button>
          <button className="flex items-center gap-2 text-sm text-slate-600">
             <Heart className="w-5 h-5"/> 50 
          </button>
        </div>
      </div>
    </Link>
  )
}
