import React from 'react';
import PropTypes from 'prop-types';

import { Container, Frame, Submit } from './styles/form';

const Form = ({ children }) => (
  <Container>{children}</Container>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;

Form.Frame = ({ children }) => <Frame>{children}</Frame>;

Form.Frame.propTypes = {
  children: PropTypes.node.isRequired,
};

Form.Submit = ({ value }) => <Submit type="submit" value={value} />;

Form.Submit.propTypes = {
  value: PropTypes.string,
};

Form.Submit.defaultProps = {
  value: 'Editar',
};
