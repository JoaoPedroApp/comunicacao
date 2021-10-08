import { useState } from 'react'




export default function Pai() {
    const [qtd, setQtd] = useState(0);
  
    function somar() {
      setQtd(qtd + 1);
    }
  
    function reset(j) {
      setQtd(j);
    }
  
    return (
      <div className="container">
        <h1> Contador </h1>
        <div> {qtd} </div>
        <button onClick={somar}> Somar </button>
  
        <Filho Resetar={reset} qtd={qtd} />
  
      </div>
    )
  }
  
  
  function Filho(props) {
    function reset() {
      props.Resetar(0);
    }
  
    return (
      <div className="container">
        <button onClick={reset}> Reset </button>
        <div> {props.qtd} </div>
      </div>
    )
  }