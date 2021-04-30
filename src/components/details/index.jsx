import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Frame, Image, Info,
} from './styles/details';

const Details = ({ children }) => <Container>{children}</Container>;

Details.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Details;

Details.Frame = ({ children }) => (
  <Frame>{children}</Frame>
);

Details.Frame.propTypes = {
  children: PropTypes.node.isRequired,
};

Details.Image = ({ src, alt }) => (
  <Image src={src} alt={alt} />
);

Details.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Details.Info = ({ children }) => (
  <Info>{children}</Info>
);

Details.Info.propTypes = {
  children: PropTypes.node.isRequired,
};
