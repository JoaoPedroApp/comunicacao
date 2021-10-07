import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import App from './conteudo/home'
// import DetalheProduto from './conteudo/detalheProduto'
// import Carrinho from './conteudo/carrinho'
import Contador from "./conteudo/comunicacaoComps/contador";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} /> */}
        <Route path="/conteudo/contador" exact={true} component={Contador} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
