import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { Layout } from './layout';

export const App = () => {
  const signed: boolean = true;

  return (
    <BrowserRouter>
      {signed ? <Layout /> : <Routes />} 
    </BrowserRouter>
  )
}