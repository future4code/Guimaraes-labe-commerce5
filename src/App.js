import React from 'react';
import './App.css';
import Home from './components/Home';
import PageInicial from './components/PageInicial';

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
