import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function Conclusao() {
  const [pedido, setPedido] = useState({});

  useEffect(() => {
    setPedido({
      numero: 309674,
      dataEntrega: '08/10/2021',
      cliente: 'João Pedro'
    })
  }, []);


  return (
    <div className="container">
      <h1> Confirmar sua compra </h1>

      <h3> Pedido: {pedido.numero} </h3>
      <h3> Cliente: {pedido.cliente} </h3>
      <h3> Previsão de Entrega: {pedido.dataEntrega} </h3>

      <Link to={{
        pathname: '/conteudo/conclusao',
        state: pedido
      }}>
          <button> Confirmar Compra </button>
      </Link>

    </div>
  )
}