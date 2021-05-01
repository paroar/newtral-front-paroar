import React from 'react';
import FormCreateContainer from '../containers/formCreateContainer';
import { GoBack } from '../components';

const Create = () => (
  <>
    <GoBack to="/" />
    <FormCreateContainer />
  </>
);

export default Create;
