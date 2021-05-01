import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, TextLink } from './styles/actions';

const Actions = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Actions.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Actions;

Actions.Button = ({
  to, src, alt,
}) => (
  <Button to={to}>
    <img src={src} alt={alt} />
  </Button>
);

Actions.Button.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Actions.TextLink = ({
  to, children,
}) => (
  <TextLink to={to}>
    {children}
  </TextLink>
);

Actions.TextLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
