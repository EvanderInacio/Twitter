import { useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Primeiro tweet',
    'Segundo',
    'Deu certo'
  ])

  function createNewSubmit(e) {
    e.preventDefault()
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleKeySubmit(event) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className='h-screen overflow-scroll'>
      <Header title="Home" />

      <form
        onSubmit={createNewSubmit}
        className="py-6 px-5 flex flex-col gap-2"
      >
        <label htmlFor="tweet" className="flex gap-3">
          <img
            className="w-12 h-12 rounded-full"
            src="https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg"
            alt="Foto de perfil"
          />
          <textarea
            className="flex-1 border-0 text-xl font-medium mt-3 resize-none focus:outline-none placeholder:text-zinc-500"
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onChange={event => {
              setNewTweet(event.target.value)
            }}
            onKeyDown={handleKeySubmit}
          />
        </label>

        <button
          className="ml-auto bg-blue-500 rounded-full py-3 px-6 flex justify-center text-white font-black text-base border-0 hover:bg-blue-600"
          type="submit"
        >
          Tweet
        </button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}
