import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { ExplorerBar } from '../components/ExplorerBar'

export function Default() {
  return (
    <div className="max-w-5xl w-full min-h-full grid grid-cols-[80px_1fr]  md:grid-cols-[300px_1fr] lg:grid-cols-[1fr_600px_300px] m-[0px_auto]">
      <Sidebar />

      <div className="border-x-[1px] border-zinc-400">
        <Outlet />
      </div>

      <div className="hidden lg:block" >
        <ExplorerBar />
      </div>
    </div>
  )
}
