import { useEffect, useState } from "react"

const minhaLista = [
  { id: "1", value: "Carnes" },
  { id: "2", value: "Frutas" },
  { id: "3", value: "Legumes" },
]

export default function App() {

  const [produtos, setProdutos] = useState(minhaLista)
  const [pesquisa, setPesquisa] = useState('')

  useEffect(
    () => {
      if(pesquisa) {

        const novaLIsta = minhaLista.filter( (item) => {
          return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        } )
        setProdutos(novaLIsta)
      } else {
        setProdutos(minhaLista)
      }
    }
  , [pesquisa])


  return (
    <div>
      <h1>Efeitos colaterais</h1>
      <input
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}

        placeholder="pesquise aqui!" />
      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}
    </div>
  )
}







