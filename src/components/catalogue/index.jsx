import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Item, Image, Info, Title, Text,
} from './styles/catalogue';

const Catalogue = ({ children }) => (
  <Container>{children}</Container>
);

Catalogue.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Catalogue;

Catalogue.Item = ({ children }) => <Item>{children}</Item>;

Catalogue.Item.propTypes = {
  children: PropTypes.node.isRequired,
};

Catalogue.Image = ({ src, alt }) => <Image src={src} alt={alt} />;

Catalogue.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Catalogue.Info = ({ children }) => <Info>{children}</Info>;

Catalogue.Info.propTypes = {
  children: PropTypes.node.isRequired,
};

Catalogue.Title = ({ children }) => <Title>{children}</Title>;

Catalogue.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Catalogue.Text = ({ children }) => <Text>{children}</Text>;

Catalogue.Text.propTypes = {
  children: PropTypes.node.isRequired,
};
