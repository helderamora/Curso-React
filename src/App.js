import React from 'react'
import Logo from './componentes/imgs/Capa.png'
import Eu from './componentes/imgs/Eu.png'

export default function App() {
  const app = () => {
    return `App - 01`
  }
  return (
    <div>

      <p>{app}</p>
      <img src={Logo} />
      <img src={Eu} />
    </div>
  )
}
