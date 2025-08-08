import { useState } from "react"

export function App() {
  const [numero1,setnumero1] = useState(0)
  const [numero2,setnumero2] = useState(0)
  const [resultado,setresultado] = useState(0)
  const [jaSomei,setjaSomei] = useState(false)

  function somar(e) {
    e.preventDefault()
    setresultado(numero1 + numero2)

    if(jaSomei === false) {
      setjaSomei(true)
    }
  }

  return (
    <div>
      <h1>Calculadora de Soma</h1>
      <form action="">
        <input type="number" placeholder="Número 1" onChange={(e) => setnumero1(e.target.valueAsNumber)} />
        <input type="number" placeholder="Número 2" onChange={(e) => setnumero2(e.target.valueAsNumber)} />
        <button onClick={somar}>Somar</button>
      </form>

      {jaSomei === true &&   <p>Resultado: {resultado}</p> }
    </div>
  )
}
