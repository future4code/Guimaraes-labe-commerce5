import React from "react";
import Home  from "./Components/home";
import Login  from "./Components/login";


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
      <Login onClickLogin={this.logar} />
    );

    return (
      <div className="App">
        {pagina}
      </div>
    );
  }
}