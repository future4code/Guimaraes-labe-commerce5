import React from "react";
import styled from "styled-components"

/*STYLED COMPONENTS GERAL */

const Container = styled.div`
  padding: 0;
    color: black;
    background-color: #040f16;
`;

/*STYLED COMPONENTS HEADER */

const NavMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Arial Narrow', Arial, sans-serif;
    height: 10vh;
    width: 90%;
    
 
    li{
        list-style: none;
        letter-spacing: 3px;
        margin-left: 30px;
        margin-right: 30px
    }

    a{
        color: #fff;
        list-style: none;
        text-decoration: none;
        

        :hover{
            color: purple;
            text-shadow: 5px 5px 6px black;
        }
    }
`
const UlNav = styled.ul`
    letter-spacing: 3px;
    display: flex;


`
const Header = styled.header`
        background:#2b2e2e;
        display:flex;
        justify-content: space-around;
`

const IconeMenu = styled.img`
        width:65px;
`
const Cart = styled.div`
display: block;
justify-content: center;
align-items: center;
`
const Text = styled.h2`
    position:absolute;
    text-align: center;
    font-family: 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 5px;
    color: black;
    top:35%;
    bottom:35%;
    left:27%;
    right:27%;
    font-size: 50px;
`
const ImgBG = styled.img`
    width:98.7vw;
    height: 70vh;
`

/*STYLED COMPONENTS MAIN */

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 95vw;
  height: auto;


`;

const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 18.75rem;
  height: auto;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  background-color: gray;
  box-shadow: inset 0 0 1em white, 0 0 1em wheat;


`;

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  height: auto;
  background-color: black;
  
`;
const Card = styled.div`
  flex-direction: column;
  border: 1px solid gray;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: auto;
  width: 15.625rem;
  margin: 7px;
  box-shadow: inset 0 0 1em white, 0 0 1em wheat;
  color: white;
  :hover {
    color: crimson;
  }
`;
const Button = styled.div`
  display: flex;
  color: white;
  height: 1.725rem;
  width: 12vw;
  text-align: center;
  font-size: small;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
  :hover {
    color: crimson;
    box-shadow: inset 0 0 1em white, 0 0 1em wheat;

  }
`;

const ContainerCarrinho = styled.div`
  flex-direction: column;
  background-color: white;
  width: 29rem;
  height: auto;
  padding: 10px;
  margin: 10px -35px 0 20px;
  border: 1px solid black;
  background-color: gray;
  box-shadow: inset 0 0 1em white, 0 0 1em wheat;

`;


const IconeDeletar = styled.strong`
  :hover {
    color: crimson;
  }
`;


/* FOOTER */

/* const FooterPag = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
font-family: 'Arial Narrow', Arial, sans-serif;
height: 15vh;

    background:#2b2e2e;
    height:40vh;
    

` */


class Home extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Foguete XR4000",
        value: 120000.00,
        imageUrl: "https://super.abril.com.br/wp-content/uploads/2021/07/orcl-foguete_site.jpg?quality=90&strip=info&w=250",
      },
      {
        id: 2,
        name: "Foguete Destroyer",
        value: 170000.00,
        imageUrl: "https://super.abril.com.br/wp-content/uploads/2021/07/12-07_virgingalactic_SITE.jpg?quality=90&strip=info&w=250",
      },
      {
        id: 3,
        name: "Foguete XR5000",
        value: 150000.00,
        imageUrl: "https://super.abril.com.br/wp-content/uploads/2021/07/orcl-foguete_site.jpg?quality=90&strip=info&w=250",
      },
      {
        id: 4,
        name: "Traje de Astronauta XXII",
        value: 12000.00,
        imageUrl: "https://super.abril.com.br/wp-content/uploads/2021/05/SI_427_ORCL_processo-seletivo-astronauta_site.jpg?quality=90&strip=info&w=250",
      },
      {
        id: 5,
        name: "Capsula de Fuga",
        value: 360000.00,
        imageUrl: "https://super.abril.com.br/wp-content/uploads/2021/04/gdfgdfg.jpg?quality=90&strip=info&w=250",
      },
      {
        id: 6,
        name: "Satélite de comunicação espacial",
        value: 85000.00,
        imageUrl: "https://super.abril.com.br/wp-content/uploads/2021/02/satelite-amazonia-1_site.jpg?quality=90&strip=info&w=250",
      },

      {
        id: 7,
        name: "Telescópio Espacial",
        value: 60000.0,
        imageUrl: "https://super.abril.com.br/wp-content/uploads/2021/12/Telescopio-James-Webb-podera-quase-enxergar-o-comeco-do-Universo.jpg?quality=90&strip=info&w=250",
      },
      {
        id: 8,
        name: "Suvenir do planeta Terra",
        value: 150.0,
        imageUrl: "https://super.abril.com.br/wp-content/uploads/2016/12/2073051457_6e5b8bfe81_o.jpg?quality=90&strip=info&w=250",
      },
    ],
    ordenado: false,
    contador: 1,
    novaListaCarrinho: [],

    valorInputBusca: "",
    valorInputMinimo: "",
    valorInputMaximo: "",
  };

  // ORDENAR PRODUTOS EM CRESCENTE E DECRESCENTE
  
  onChangeSelect = () => {
    const listaOrdenada = this.state.produtos.sort(function (a, b) {
      return a.value > b.value ? 1 : b.value > a.value ? -1 : 0;
    });
    this.setState({ produtos: listaOrdenada });
    this.setState({ ordenado: !this.state.ordenado });
    if (this.state.ordenado === false) {
      this.setState({ produtos: listaOrdenada.reverse() });
    }
  };


  onChangeInputMinimo = (event) => {
    this.setState({ valorInputMinimo: event.target.value });
  };

  onChangeInputMaximo = (event) => {
    this.setState({ valorInputMaximo: event.target.value });
  };

  onChangeInputBusca = (event) => {
    this.setState({ valorInputBusca: event.target.value });
  };

  // ADICIONAR PRODUTOS AO CARRINHO

  adicionarNoCarrinho = (produto) => {
    let carrinho = produto;
    this.setState({
      novaListaCarrinho: [...this.state.novaListaCarrinho, carrinho],
    });
  };
  
  
  //DELETAR PRODUTO DO CARRINHO

  apagarItemCarrinho = (itemId) => {
    const listaItensCarrinho = this.state.novaListaCarrinho.filter((itens) => {
      if (itemId === itens.id) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({ novaListaCarrinho: listaItensCarrinho });
  };

  //local storge  e ciclo de vida

  componentDidUpdate = () => {
    const novoCarrinho = this.state.novaListaCarrinho;

    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho)); 
  };

  componentDidMount = () => {
    const carrinhoNoLocalStorage = localStorage.getItem("carrinho"); 

    const carrinhoObjeto = JSON.parse(carrinhoNoLocalStorage); 

    console.log(carrinhoObjeto);
  };
 
  render() {
    let maiusculas = this.state.valorInputBusca.toUpperCase();
    let listaDoEstado = this.state.produtos;
    if (this.state.valorInputBusca !== "") {
      listaDoEstado = listaDoEstado.filter((produto) => {
        return produto.name.includes(maiusculas);
      });
    } else if (this.state.valorInputMaximo !== "") {
      listaDoEstado = listaDoEstado.filter((produto) => {
        return produto.value <= this.state.valorInputMaximo;
      });
    } else if (this.state.valorInputMinimo !== "") {
      listaDoEstado = listaDoEstado.filter((produto) => {
        return produto.value >= this.state.valorInputMinimo;
      });
    } else if (this.state.checkboxFavoritos === true) {
      listaDoEstado = listaDoEstado.filter((produto) => {
        return produto.favorito === true;
      });
    }

    // Cópia do state produtos

    const listaRenderizada = listaDoEstado.map((produto) => {
      return (
        <Card>
          <img src={produto.imageUrl} alt="Imagem do produto" />
          <p>{produto.name}</p>
          <p>R$ {produto.value}</p>
          <Button onClick={() => this.adicionarNoCarrinho(produto)}>
           Add para o carrinho
          </Button>
        </Card>
      );
    });

    // MAP DO ARRAY DE PRODUTOS ADICIONADOS PARA PEGAR O VALOR DO PRODUTO

    const valorDoItem = this.state.novaListaCarrinho.map((item) => {
      return item.value;
    });

    // NOVO ARRAY COM OS PRODUTOS ADICIONADOS PARA PEGAR A QUANTIDADE DE CADA PRODUTO

    let arrayProdutoAdicionado = [];
    this.state.novaListaCarrinho.forEach((produto) => {
      const estaNoArray = arrayProdutoAdicionado.findIndex(
        (prod) => prod.id === produto.id
      );
      if (estaNoArray === -1) {
        const novoProduto = {
          id: produto.id,
          name: produto.name,
          quantidade: 1,
        };
        arrayProdutoAdicionado.push(novoProduto);
      } else {
        const quantidadeEncontrada =
          arrayProdutoAdicionado[estaNoArray].quantidade;
        arrayProdutoAdicionado[estaNoArray] = {
          ...arrayProdutoAdicionado[estaNoArray],
          quantidade: quantidadeEncontrada + 1,
        };
      }
    });

    // MAP DO ARRAY DE PRODUTOS ADICIONADOS PARA PEGAR A QUANTIDADE DE CADA PRODUTO
    const nomeDoItem = arrayProdutoAdicionado.map((item) => {
      return (
        <div>
          <p>
            {item.quantidade}x {item.name} -{" "}
            <IconeDeletar onClick={() => this.apagarItemCarrinho(item.id)}>X</IconeDeletar>
            {/*NOVO*/}
          </p>
        </div>
      );
    });

    // REDUCE PARA SOMAR OS VALORES DE TODOS OS PRODUTOS NO CARRINHO
    const soma = valorDoItem.reduce(
      (soma, valorDoItem) => soma + valorDoItem,
      0
    );

    // CONST PARA INDICAR A QUANTIDADE DE PRODUTOS
    const numeroDeProdutos = listaDoEstado.length;

    // ============================================================
    return (
      <Container>
        
        <Header>        
          <IconeMenu src="/assets/IconeNave.png"/>    
          <NavMenu>            
            <UlNav>                     
                <li><a href="#">Inicio</a></li>           
            </UlNav>
    
            <UlNav>
                <li><a >Carrinho</a></li>
                <li><a >Logout</a></li>
            </UlNav>
          </NavMenu>
          
        </Header>
        <Cart>
            <ImgBG src="https://st2.depositphotos.com/2197700/9865/i/600/depositphotos_98657884-stock-photo-space-shuttle-orbiting-earth.jpg" alt="Background" />
            <Text>Last Frontier</Text> 
        </Cart>

        <ContainerGeral>
          <ContainerFiltro>
            <h1>Filtros</h1>
            <label>Valor Mínimo:</label>
            <input
              type="number"
              value={this.state.valorInputMinimo}
              onChange={this.onChangeInputMinimo}
            ></input>
            <label>Valor Máximo:</label>
            <input
              type="number"
              value={this.state.valorInputMaximo}
              onChange={this.onChangeInputMaximo}
            ></input>
            <label>Buscar Produto</label>
            <input
              value={this.state.valorInputBusca}
              onChange={this.onChangeInputBusca}
            ></input>
            <div>
              {" "}
              <select onChange={this.onChangeSelect}>
                <option></option>
                <option value="crescente">Preço: Decrescente</option>
                <option value="crescente">Preço: Crescente</option>
              </select>
              <p>Total de itens na loja: {numeroDeProdutos}</p>
            </div>
          </ContainerFiltro>

          {/*cards*/}
          <ContainerCard>{listaRenderizada}</ContainerCard>
          {/*crescente decrescente*/}

          {/*carrinho*/}
          <ContainerCarrinho>
            <h1>Carrinho:</h1>
            {/*NOME DE CADA ITEM NO CARRINHO*/}
            {nomeDoItem}
            {}
            {/*TOTAL SOMA DOS PRODUTOS NO CARRINHO*/}
            <p>R${soma}</p>
          </ContainerCarrinho>
                    
        </ContainerGeral>

      </Container>
      
      
    );
  }
}
export default Home;