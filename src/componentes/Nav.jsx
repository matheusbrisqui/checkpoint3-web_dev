import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("Saindo da sessão");
    navigate('/');
  }

  return (
    <>
      <header className="header">
        <div className="logo">Tuko Sushi</div>
        <nav className="nav-list">
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Produtos" className="nav-link">Produtos</Link>
            </li>
            <li className="nav-item">
              <Link to="/Sobre" className="nav-link">Sobre</Link>
            </li>

          </ul>
        </nav>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </header>
    </>
  );
}

export default Nav;
