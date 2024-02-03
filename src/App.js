import React from 'react'
import Header from './componentes/Header';
import Corpo from './componentes/Corpo';
import Dados from './componentes/Dados'


export default function App() {
  return (
    <>
      <Header />
      <Corpo />
      <Dados canal='My first application'
        youtube='youtube.com.br/'
        curso='React.js' />
    </>
  )
}
