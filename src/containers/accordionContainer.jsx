/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from '../components';

import { filter, dictionary } from '../constants/csv_dictionary';

const AccordionContainer = ({ data }) => {
  const entries = Object.entries(data);

  return (
    <Accordion>
      {entries.map((item) => (filter.includes(item[0])
        ? null
        : (
          <Accordion.Item key={item[0]}>
            <Accordion.Header>{dictionary[item[0]]}</Accordion.Header>
            <Accordion.Body>{(item[1] === null && 'Sin datos') || item[1]}</Accordion.Body>
          </Accordion.Item>
        )))}
    </Accordion>
  );
};

AccordionContainer.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default AccordionContainer;
