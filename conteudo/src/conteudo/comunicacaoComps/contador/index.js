import { useState } from 'react'




export default function Pai() {
    const [qtd, setQtd] = useState(0);
  
    function contar() {
      setQtd(qtd + 1);
    }
  
    function reset(x) {
      setQtd(x);
    }
  
    return (
      <div className="container">
        <h1> Contador </h1>
        <div> {qtd} </div>
        <button onClick={contar}> Contar </button>
  
        <Filho onReset={reset} qtd={qtd} />
  
      </div>
    )
  }
  
  
  function Filho(props) {
    function reset() {
      props.onReset(0);
    }
  
    return (
      <div className="container">
        <button onClick={reset}> Reset </button>
        <div> {props.qtd} </div>
      </div>
    )
  }
    // export default function Pai() {
    //     const [qtd, setQtd] = useState(0);

    //     function somar() {
    //         setQtd(qtd + 1);
    //     }

    //     function reset() {
    //         setQtd();
    //     }

    //     return (
    //         <div className="container">
    //             <h1> Contador </h1>
    //             <div> {qtd} </div>
    //             <button onClick={somar}> Somar</button>

    //             < Filho Resetado={reset} qtd={qtd} />
    //         </div>
    //     )
    // }


    // function Filho(props) {
    //     function reset() {
    //         props.Resetado(0);
    //     }

    //     return (
    //         <div className="container">
    //             <button onClick={reset}> Resetar</button>
    //             <div> {props.qtd} </div>
    //         </div>
    //     )
    // }