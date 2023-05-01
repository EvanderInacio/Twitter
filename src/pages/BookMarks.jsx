export function BookMarks() {
  return (
    <div>
      <div className="border-b-2">
        <div className="flex-1 bg-white border-x-2">
          <div className="flex flex-col p-3  justify-between">
            <h1 className="text-2xl font-bold hover:underline">Bookmarks</h1>
            <h1 className="text-slate-500">@Evander_Inacio</h1>
          </div>
        </div>
      </div>

      <div className="mt-5 ">
        <img
          src=" https://abs.twimg.com/responsive-web/client-web/book-in-bird-cage-800x400.v1.71804389.png"
          alt="jail"
        />
      </div>

      <div className="">
        <h1 className="text-2xl font-bold text-center mb-4">
          Save Tweets for later{' '}
        </h1>
        <h1 className="text-slate-500 text-center m-8">
          Don’t let the good ones fly away! Bookmark Tweets to easily find them
          again in the future.
        </h1>
      </div>
    </div>
  )
}
