import {} from 'react'
import { Link } from 'react-router-dom';
/*Aqui que eu importei as imagens de excluir, inserir e editar */
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import {MdInput as Inserir } from 'react-icons/md';
import { ListaPedido } from '../componentes/ListaPedido';

  
function Pedido() {
    return (
      <section>
        <h1>Meus Pedidos</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>DESCRIÇÃO</th>
                <th>PREÇO</th>
                <th>EDITAR / EXCLUIR / ADICIONAR</th>
              </tr>
            </thead>
            <tbody>
              {/* ele faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um novo array */}
              {ListaPedido.map((item, indice) => (
                <tr key={indice}>
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.desc}</td>
                  <td>{item.valor}</td>
                  <td>
                    {' '}
                    {/*Link para chamar a tela de editar produtos */}
                    <Link to={`/EditarPedido/Pedido/${item.id}`}>
                      <Editar />
                    </Link>{' '}
                    | {/*Link para chamar a tela de excluir produtos */}
                    <Link to={`/ExcluirPedido/Pedido/${item.id}`}>
                      <Excluir />
                      {/*espaço entre os links {' '} */}
                    </Link>{' '}
                    |
                    {' '}
                    <Link to={`/InserirPedido/Pedido/${item.id}`}>
                      <Inserir />
                    </Link>{' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
export default Pedido