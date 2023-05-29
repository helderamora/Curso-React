const minhaLista = [
    { id: "1", value: "Maçã" },   
    { id: "2", value: "Banana" },    
    { id: "3", value: "Mamão" },
]
export default function MinhaLista() {
    return minhaLista.map((item) => {
        return (
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })
}