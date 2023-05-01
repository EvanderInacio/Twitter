import { ChatCenteredText, GearSix } from "phosphor-react";

export function Messages() {
  return (
    <div>
      <div className="flex-1 bg-white border-x-2 border-b-2">
        <div className="flex flex-row p-3 justify-between">
          <h1 className="text-xl font-bold ml-7 hover:underline">Messages</h1>
          <div className="flex flex-row ">
            <div className="flex-1 px-1">
              <GearSix className="w-7 h-7 " />
            </div>
            <div className="flex px-1">
              <ChatCenteredText className="w-7 h-7 " />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <h1 className="text-2xl font-bold m-5">Welcome to your inbox! </h1>
        <h1 className="text-slate-500">
          Drop a line, share Tweets and more with private conversations between
          you and others on Twitter.{' '}
        </h1>
      </div>

      <button className="bg-blue-500 w-56 rounded-full font-bold text-white text-xl p-4 mx-20 my-10 hover:bg-blue-600">
        Write a Message
      </button>
    </div>
  )
}
