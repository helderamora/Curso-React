import React from 'react'
import './App.css'
import Header from './componentes/Header'


export default function App() {

  const textoDestaque = {
    color: 'gray',
    fontSize: '1.5em'
  }

  return (
    <>
      <Header />
      <section className='caixa'>
        <h1 style={{ color: 'tomato' }}>My first application</h1>
        <h2 style={textoDestaque}>Curso React</h2>
        <p className='texto'>Vem codar!</p>
      </section>
    </>
  )
}
