import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'

function App() {
 function handleRestartGame (){
      alert("Reiniciou o jogo ")
  }

  return (
    <>
      <div>
       <button> aperte aqui</button>
      </div>
      <Header current={5} max={10} onRestart={handleRestartGame}/>
     
    </>
  )
}

export default App
