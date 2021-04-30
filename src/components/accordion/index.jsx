import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Item, Header, Body, ButtonLink,
} from './styles/accordion';

const ToogleBodyContext = createContext({});

const Accordion = ({ children }) => (
  <Container>{children}</Container>
);

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Item = ({ children }) => {
  const [isToogled, setIsToogled] = useState(false);

  return (
    <ToogleBodyContext.Provider value={{ isToogled, setIsToogled }}>
      <Item>{children}</Item>
    </ToogleBodyContext.Provider>
  );
};

Accordion.Item.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Header = ({ children }) => {
  const { isToogled, setIsToogled } = useContext(ToogleBodyContext);
  return (
    <Header onClick={() => setIsToogled(!isToogled)}>
      {children}
      {isToogled ? (
        <img src="/images/icons/down.png" alt="Open" />
      ) : (
        <img src="/images/icons/up.png" alt="Close" />
      )}
    </Header>
  );
};

Accordion.Header.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Body = ({ children }) => {
  const { isToogled } = useContext(ToogleBodyContext);
  return <Body height={isToogled}>{children}</Body>;
};

Accordion.Body.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.ButtonLink = ({ children }) => <ButtonLink>{children}</ButtonLink>;

Accordion.ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Accordion;
