import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increment } from '../../store/reducers/count';


const Dashboard: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCount = () => {
    dispatch(increment(0))
  }

  return (
    <div className='default-page'>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <a href="/usuarios">Usuários</a>
          </li>
        </ul>
      </nav>
      <button onClick={() => {
          navigate('/usuarios');
      }}>
        Pagina de Usuários
      </button>
      <button onClick={handleCount}>
          COUNT++
      </button>
   </div>
  );
}

export default Dashboard;