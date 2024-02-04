import React, { useState } from 'react'
import Header from './componentes/Header'
import Numero from './componentes/Numero'
import './App.css'


export default function App() {

  const [num, setNum] = useState(0)

  return (
    <>
      <Header />
      <p>Valor de state num em App: {num}</p>
      <Numero num={num} setNum={setNum} />
      <section className='caixa'>
        <h1>My first application</h1>
        <h2>Curso React</h2>
        <p>Vem codar!</p>
      </section>
    </>
  )
}
