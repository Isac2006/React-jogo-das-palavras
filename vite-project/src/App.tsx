import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Tip} from "./components/Tip/index"
import { Header } from './components/Header/index'
import { Letter } from './components/letter/index'

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
     <Tip tip="uma das liguagens mais famosas"/>
  <div className="letters-container">
  <Letter value="R"/>
  <Letter value="E"/>
  <Letter value="I"/>
  </div>

    </>
  )
}

export default App
