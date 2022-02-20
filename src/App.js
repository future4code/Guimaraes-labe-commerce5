import React from 'react';
import './App.css';
import Home from './components/paginas/Home';
import PageInicial from './components/paginas/PageInicial';
import Routers from './components/Routers';


export default class App extends React.Component {
  state = {
    login: false
  };

  logar = () => {
    this.setState({ login: true });
  };

  logout = () => {
    this.setState({ login: false });
  };

  render() {
    let pagina = this.state.login ? (
      <Home onClickLogout={this.logout} />
    ) : (
      <PageInicial onClickLogin={this.logar} />
    );

    return (
     
      <div className="App">
        {pagina}
        
      </div>
      
    );
  }
}
