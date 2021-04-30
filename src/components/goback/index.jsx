import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Image } from './styles/goback';

const GoBack = ({ to }) => (
  <Link to={to}>
    <Container>
      <Image src="/images/icons/left.png" alt="goback" />
    </Container>
  </Link>
);

GoBack.propTypes = {
  to: PropTypes.string.isRequired,
};

export default GoBack;
