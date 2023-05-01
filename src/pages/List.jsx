import { ArrowCircleLeft, CheckCircle } from 'phosphor-react'

export function List() {
  return (
    <div>
      <div className="flex-1 bg-white border-x-2 border-b-2">
        <div className="flex flex-row p-3 justify-between">
          <ArrowCircleLeft className="w-7 h-7 " />

          <h1 className="text-xl font-bold ml-7 hover:underline">Lists</h1>
          <div className="flex flex-row ">
            <div className="flex-1 px-1">
              <CheckCircle className="w-7 h-7 " />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2">
        <h1 className="text-xl font-bold ml-7 mt-5 mb-10">Pinned Lists</h1>

        <p className="mx-10 mb-5 text-slate-500">
          Nothing to see here yet — pin your favorite Lists to access them
          quickly.
        </p>
      </div>

      <div>
        <h1 className="text-xl font-bold ml-7 mt-5 mb-10">Your List</h1>

        <p className="mx-10 mb-5 text-slate-500">
          You haven't created or followed any Lists. When you do, they'll show
          up here.
        </p>
      </div>
    </div>
  )
}
