import Icone from '../assets/icone.svg'

export function ExplorerFeed() {
  return (
    <div>
      <div className="border-b-2 mt-2">
        <div className=" flex flex-row">
          <img
            src="https://pbs.twimg.com/profile_images/1611348038135545858/16DZ6P_Q_400x400.jpg"
            alt="profile"
            className=" rounded-full w-12 h-12 mr-2 mb-2 "
          />
          <h1 className="text-lg font-bold cursor-pointer hover:underline">
            Corinthians
          </h1>
          <img className="w-7 h-6 mb-1" src={Icone} alt="Icone" />
        </div>
        <p>🎶 VAMOS JOGAR COM RAÇA E COM O CORAÇÃO... 🎶</p>
        <img
          src="https://pbs.twimg.com/media/FuzixcVWAAEOiV4?format=jpg&name=900x900"
          alt="banner"
          className="w-full rounded-3xl p-2"
        />
      </div>
    </div>
  )
}
