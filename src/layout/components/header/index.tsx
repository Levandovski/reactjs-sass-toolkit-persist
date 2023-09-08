import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='content-header'>
        <div className='logo'>LOGO</div>
        <nav>
          <ul>
            <li>
              <a href='/dashboard'>Dashboard</a>
            </li>
            <li>
              <a href='/usuarios'>Usuários</a>
            </li>
            <li>
              <a href='/#'>Documentos</a>
              <ul>
                <li>Empresa</li>
                <li>Projetos</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}