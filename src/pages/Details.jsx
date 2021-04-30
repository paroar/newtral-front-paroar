import React from 'react';
import { GoBack } from '../components';
import PoliticianContainer from '../containers/politicianContainer';

const Details = () => (
  <>
    <GoBack to="/" />
    <PoliticianContainer />
  </>
);

export default Details;
