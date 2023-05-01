import { useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import { PaperPlaneRight } from 'phosphor-react'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo',
    'Sim, você está certo sobre esse assunto.',
    'Muito bom'
  ])

  function createNewAnswer(e) {
    e.preventDefault()
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleKeySubmit(event) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className='h-screen overflow-scroll'>
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos facere vero quisquam et repudiandae quaerat nam! Sequi provident excepturi, architecto alias temporibus nam distinctio, culpa maiores, possimus iusto quibusdam omnis?" />

      <Separator />

      <form
        className="py-6 px-5 border-b-[1px] border-zinc-400 flex items-center gap-2"
        onSubmit={createNewAnswer}
      >
        <label htmlFor="tweet" className="flex gap-3 items-center flex-1">
          <img
            className="w-12 h-12 rounded-full"
            src="https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg"
            alt="Foto de perfil"
          />
          <textarea
            className="flex-1 border-0 text-base md:text-xl font-medium mt-5 resize-none focus:outline-none placeholder:text-zinc-500"
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onChange={event => {
              setNewAnswer(event.target.value)
            }}
            onKeyDown={handleKeySubmit}
          />
        </label>

        <button
          className="ml-auto bg-blue-500 rounded-full py-3 px-6 flex justify-center text-white font-black text-base border-0 hover:bg-blue-600"
          type="submit"
        >
          <PaperPlaneRight className='md:hidden' />
          <span className='hidden md:block'>Answer</span> 
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}
