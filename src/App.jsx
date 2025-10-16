
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './card.jsx'

function App() {
  

  const questions = [
    { id:1, question:"Can i pet the cat?", answer:"No it's mine get outta here"},
    { id:2, question:"What is mcsm", answer:"If you don't know you had no childhood"},
    { id:3, question:"uh", answer:"uhhh"}
  ]

  return (
    <>
      <div className='main'>
        <ul className='list'>
          {questions.map(
            (questions)=>(
              <>
              <Card question={questions.question} answer={questions.answer} id={questions.id}/>
              </>
            )
          )}
        </ul>
      </div>
    </>
  )
}

export default App
