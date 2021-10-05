import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from './conteudo/home'
import DetalheProduto from './conteudo/detalheProduto'
import Carrinho from './conteudo/carrinho'


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
