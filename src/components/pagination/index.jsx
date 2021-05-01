import React from 'react';
import PropTypes from 'prop-types';
import { Container, ButtonLink } from './styles/pagination';

const Pagination = ({ children }) => (
  <Container>{children}</Container>
);

Pagination.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Pagination;

Pagination.ButtonLink = ({
  to, src, alt,
}) => <ButtonLink to={to}><img src={src} alt={alt} /></ButtonLink>;

Pagination.ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
