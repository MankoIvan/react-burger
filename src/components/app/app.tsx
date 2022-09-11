import React from 'react';
import AppHeader from '../app-header/app-header';
import Layout from '../layout/layout';
import MainContent from '../main-content/main-content';
import Constructor from '../../pages/constructor/constructor';

function App() {
  return (
    <Layout>
      <AppHeader />
      <MainContent>
        <Constructor />
      </MainContent>
    </Layout>
  );
}

export default App;
