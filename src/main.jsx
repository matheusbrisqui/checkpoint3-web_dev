import {} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Error from './routes/Error.jsx';
import Login from './routes/Login.jsx';
import Produtos from './routes/Produtos.jsx';
import Sobre from './routes/Sobre.jsx';
import EditarProduto from './routes/EditarProduto.jsx';
import ExcluirProduto from './routes/ExcluirProduto.jsx';
import InserirProduto from './routes/InserirProduto.jsx';
import Pedido from './routes/Pedido.jsx';
import EditarPedido from './routes/EditarPedido.jsx';
import ExcluirPedido from './routes/ExcluirPedido';
import InserirPedido from './routes/InserirPedido';

import {register} from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/Login', element: <Login /> },
      { path: '/Produtos', element: <Produtos /> },
      { path: '/Sobre', element: <Sobre /> },
      /*criando a rota (editar,excluir e inserir) produtos e passando o id do produto */
      { path: '/EditarProduto/Produtos/:id', element: <EditarProduto /> },
      { path: '/ExcluirProduto/Produtos/:id', element: <ExcluirProduto /> },
      { path: '/InserirProduto/Produtos/:id', element: <InserirProduto /> },
      { path: '/Pedido', element: <Pedido /> },
      { path: '/InserirPedido/Pedido/:id', element: <InserirPedido /> },
      { path: '/ExcluirPedido/Pedido/:id', element: <ExcluirPedido /> },
      { path: '/EditarPedido/Pedido/:id', element: <EditarPedido /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
