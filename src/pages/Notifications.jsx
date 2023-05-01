import { GearSix } from 'phosphor-react'

export function Notifications() {
  return (
    <div className="h-screen flex flex-row">
      <div className="flex-1">
        <div>
          <div className="flex-1 bg-white border-x-2">
            <div className="flex flex-row p-3  justify-between">
              <h1 className="text-2xl font-bold hover:underline">
                Notifications
              </h1>

              <GearSix className="w-7 h-7 " />
            </div>
          </div>

          <div className="border-b-2"></div>

          <img
            src="https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png"
            alt="verified"
          />
        </div>

        <div className="text-center mt-20 ">
          <h1 className="font-bold text-2xl"> Nothing to see here — yet </h1>

          <h1 className="text-slate-500 mt-5">
            Likes, mentions, Retweets, and a whole lot more — when it comes from
            a verified account, you’ll find it here.{' '}
          </h1>
          <a
            className="hover:underline text-semibold"
            href="https://help.twitter.com/en/managing-your-account/about-twitter-verified-accounts"
          >
            learn more
          </a>
        </div>
      </div>
    </div>
  )
}
