import React from 'react';
import AppHeader from '../app-header/app-header';
import Layout from '../layout/layout';
import MainContent from '../main-content/main-content';
import Constructor from '../../pages/Constructor/Constructor';

function App() {
  return (
    <Layout>
      <AppHeader />
      <MainContent>
        {/* Тут будет место для роутера, если понадобится */}
        {/* Пока только одна страница */}
        <Constructor />
      </MainContent>
    </Layout>
  );
}

export default App;
