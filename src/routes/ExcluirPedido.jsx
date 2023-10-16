import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedido } from '../componentes/ListaPedido';


function ExcluirPedido() {
  /*Hooks- useParams e Navigate */
  const { id } = useParams();
  const navigate = useNavigate();

  const recProdutoListaById = ListaPedido.filter((item) => item.id == id);
  /*Hook-useState */
  const [produto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    desc: recProdutoListaById[0].desc,
    valor: recProdutoListaById[0].valor,
  });
  /*funções */
  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaPedido.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaPedido.splice(indice, 1);
    navigate('/pedido');
  };

  return (
    <section>
      <h1>Excluir Pedido</h1>
      <div>
        <p>Nome : {produto.nome}</p>
        <p>Desc : {produto.desc}</p>
        <p>valor : {produto.valor}</p>
      </div>
      <div>
        {/*chamando a função handleExclude dentro do botão*/}
        <button onClick={handleExclude} >
          EXCLUIR
        </button>
        {/*chamando o navigate para voltar para a tela produtos */}
        <button onClick={() => navigate('/pedido')}>
          CANCELAR
        </button>
      </div>
    </section>
  );
}
export default ExcluirPedido