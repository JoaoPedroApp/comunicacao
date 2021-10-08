// import { StrictMode } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

// import Pedido from "./conteudo/conteudo/comunicacaoComps/finalizacaoPedido/pedido";
// import ConclusaoPedido from "./conteudo/conteudo/comunicacaoComps/finalizacaoPedido/conclusao";
// // import App from './conteudo/home'
// // import DetalheProduto from './conteudo/detalheProduto'
// // import Carrinho from './conteudo/carrinho'
// import Contador from "./conteudo/conteudo/comunicacaoComps/contador";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <BrowserRouter>
//       <Switch>
//       <Route path="/conteudo/conteudo/pedido" component={Pedido} />
//         <Route path="/conteudo/conteudo/conclusao" component={ConclusaoPedido} />
//         {/* <Route path="/" exact={true} component={App} />
//         <Route path="/detalhe" component={DetalheProduto} />
//         <Route path="/carrinho" component={Carrinho} /> */}
//         <Route path="/conteudo/conteudo/contador" exact={true} component={Contador} />
//       </Switch>
//     </BrowserRouter>
//   </StrictMode>,
//   rootElement
// );

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import './styles.css'


// import Teste from "./InfoX/teste";
import Contador from "./conteudo/comunicacaoComps/contador";
import Pedido from "./conteudo/comunicacaoComps/finalizacaoPedido/pedido";
import ConclusaoPedido from "./conteudo/comunicacaoComps/finalizacaoPedido/conclusao";

//import App from "./infoA/destiny";
//import App from "./infoB/amaze";
import App from './conteudo/home'
import DetalheProduto from './conteudo/detalheProduto'
import Carrinho from './conteudo/carrinho'

// import NTC from './infoC/NTC/home'
// import NTCDenunciaDetalhada from './infoC/NTC/denunciaDetalhada'

// import SWT from './infoD/SweetCherry'


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
        
        {/* <Route path="/infoD/swt" exact={true} component={SWT} />
        <Route path="/infoC/ntc" exact={true} component={NTC} />
        <Route path="/infoC/ntc/denunciaDetalhada" exact={true} component={NTCDenunciaDetalhada} />

        <Route path="/teste" component={Teste} /> */}
        <Route path="/conteudo/contador" exact={true} component={Contador} />
        <Route path="/conteudo/pedido" component={Pedido} />
        <Route path="/conteudo/conclusao" component={ConclusaoPedido} />

      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
