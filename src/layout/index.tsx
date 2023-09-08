import React from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Routes } from '../routes';

export const Layout: React.FC = () => {
  return (
    <div className='container-app'>
      <Header />
      <div className='container-pages'>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}
