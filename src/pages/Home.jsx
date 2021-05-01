import React from 'react';
import CatalogueContainer from '../containers/catalogueContainer';
import { PaginationContextProvider } from '../contexts/paginaitonContext';

const Home = () => (
  <PaginationContextProvider>
    <CatalogueContainer />
  </PaginationContextProvider>

);

export default Home;
