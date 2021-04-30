import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container, Frame, Image, Info, Actions,
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

Details.Actions = ({ id }) => (
  <Actions>
    <Link to={`/update/${id}`}>
      <img src="/images/icons/edit.png" alt="edit" />
    </Link>
    <Link to={`/delete/${id}`}>
      <img src="/images/icons/delete.png" alt="delete" />
    </Link>
  </Actions>
);

Details.Actions.propTypes = {
  id: PropTypes.string.isRequired,
};
